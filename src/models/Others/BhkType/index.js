// models/BHK.js
import mongoose from 'mongoose';

const BHKSchema = new mongoose.Schema({
  bhkType: {
    type: String,
    required: true,
  },
}, { timestamps: true });

 const BHK=mongoose.models.BHK || mongoose.model('BHK', BHKSchema);
 export default BHK