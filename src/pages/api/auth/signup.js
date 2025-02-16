import bcrypt from "bcrypt";
import sendOTPSMS from "@/utils/sendOTPSMS";
import AdminUser from "@/models/User/AdminUser";
import DbConnection from "@/utils/db";
export default async function handler(req, res) {
  await DbConnection();
  if (req.method === "POST") {
    const { firstName, email, password, lastName, phone } = req.body;

    if (!firstName || !lastName || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const user = await AdminUser.findOne({ email });
    if (user) {
      return res.status(200).json({ message: "Admin User is already exists" });
    }

    //hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    //generate otp

    const otp = Math.floor(100000 + Math.random() * 900000);

    //send ot to the number

    const newUser = {
      firstName,
      lastName,
      email,
      user: "adminUser",
      password: hashedPassword,
      phone,
      otp,
      verified: false,
    };
    try {
      const savedUser = await AdminUser.create(newUser);
      return res
        .status(201)
        .json({
          success: true,
          message: "User registered successfully. Please verify your OTP.",
        });
    } catch (error) {
      return res
      .status(501)
      .json({
        success: false,
        message: "something went wrong",
        error
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
