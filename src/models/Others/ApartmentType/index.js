// models/ApartmentType.js
import mongoose from 'mongoose';

const ApartmentTypeSchema = new mongoose.Schema({
  apartmentType: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ApartmentType= mongoose.models.ApartmentType || mongoose.model('ApartmentType', ApartmentTypeSchema);

export default ApartmentType