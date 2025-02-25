import mongoose from "mongoose"
import  "./AdminUser";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    users:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"AdminUser"
      }
    ],
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    refreshExpiryTime: {
        type: Date,
    },
    
}, { timestamps: true });

const SuperAdminUser = mongoose.models.SuperAdminUser||mongoose.model('SuperAdminUser', UserSchema);

export default SuperAdminUser;
