import mongoose from 'mongoose'
import "./User/AdminUser"

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    amenities: [{
        type: String,
        trim: true
    }],
    pricePerNight: {
        type: Number,
        required: true,
        min: 0
    },
    images: [{
        type: String,
        trim: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AdminUser"
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);
export default Room;
