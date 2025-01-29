import jwt from 'jsonwebtoken';
import cookie from 'cookie';
const users = [];
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { mobile, otp } = req.body;
      const user = users.find((user) => user.mobile === mobile);
      if (!user) {
        return res.status(400).json({ message: 'User not found.' });
      }
      if (user.otp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP.' });
      }
      user.verified = true;
      user.otp = null;
      const accessToken = jwt.sign(
        { mobile: user.mobile, name: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
      );
      const refreshToken = jwt.sign(
        { mobile: user.mobile },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
      );
  
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json({ accessToken, message: 'OTP verified successfully.' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }