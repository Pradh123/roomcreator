import mongoose from 'mongoose';

const PropertyAgeSchema = new mongoose.Schema({
  propertyAge: {
    type: String,
    required: true,
  },
}, { timestamps: true });

 const PropertyAge=mongoose.models.PropertyAge || mongoose.model('PropertyAge', PropertyAgeSchema);
 export default PropertyAge