import mongoose from 'mongoose';

const AmenitiesSchema = new mongoose.Schema({
    amenities: {
    type: String,
    required: true,
  },
}, { timestamps: true });

 const Amenities=mongoose.models.Amenities || mongoose.model('Amenities', AmenitiesSchema);
 export default Amenities