import bcrypt from "bcrypt";
import dbConnect from "@/utils/db";
import { serialize } from "cookie";
import SuperAdminUser from "@/models/User/SuperAdminUser";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  try {
    await dbConnect();
    console.log("req body data is here ----> ", req.body);
    const adminType = "super-admin";
    return res.status(200).json({ message: "Admin Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
