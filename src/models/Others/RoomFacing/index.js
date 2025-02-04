import mongoose from 'mongoose';

const RoomFacingSchema = new mongoose.Schema({
  roomFacing: {
    type: String,
    required: true,
  },
}, { timestamps: true });

 const RoomFacing=mongoose.models.RoomFacing || mongoose.model('RoomFacing', RoomFacingSchema);
 export default RoomFacing