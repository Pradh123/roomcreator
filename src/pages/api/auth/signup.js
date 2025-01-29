import bcrypt from 'bcryptjs';
import sendOTPSMS from '@/utils/sendOTPSMS';

const users = [];//  This should be replaced with a database in production

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, confirmPassword, mobile } = req.body;

    if (!name || !email || !password || !confirmPassword || !mobile) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    const existingUser = users.find((user) => user.mobile === mobile);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    await sendOTPSMS(mobile, otp); // Send OTP to user's mobile number

    const newUser = {
      name,
      email,
      password: hashedPassword,
      mobile,
      otp,
      verified: false,
    };

    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully. Please verify your OTP.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
