import mongoose from 'mongoose';

const FloorSchema = new mongoose.Schema({
  floor: {
    type: String,
    required: true,
  },
}, { timestamps: true });

 const Floor=mongoose.models.Floor || mongoose.model('Floor', FloorSchema);
 export default Floor