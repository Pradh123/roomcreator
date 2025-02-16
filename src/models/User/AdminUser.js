import mongoose from "mongoose";
import  "../Room";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    otp: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    refreshExpiryTime: {
      type: Date,
    },
    userType: {
      type: String,
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const AdminUser =
  mongoose.models.AdminUser || mongoose.model("AdminUser", UserSchema);

export default AdminUser;
