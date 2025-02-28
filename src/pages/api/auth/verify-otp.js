import bcrypt from "bcrypt";
import dbConnect from "@/utils/db";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/generateTokens";
import { serialize } from "cookie";
import SuperAdminUser from "@/models/User/SuperAdminUser";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  try {
    await dbConnect();
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }
    const user = await SuperAdminUser.findOne({username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const adminType = "super-admin";
    const accessToken = await generateAccessToken(user?._id, adminType);
    const refreshToken = await generateRefreshToken(user?._id, adminType);
    user.refreshToken = refreshToken;
    await user.save();
    const cookieOptions = {
      httpOnly: true,
      sameSite: "Lax",
      path: "/",
    };

    res.setHeader("Set-Cookie", [
      serialize("accessToken", accessToken, {
        ...cookieOptions,
        maxAge: 20 * 60,
      }),
      serialize("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 60 * 60 * 24 * 7,
      }),
    ]);
    return res.status(200).json({ message: "Super Admin Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
