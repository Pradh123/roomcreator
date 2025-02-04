

import Amenities from "@/models/Amenities";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
  await DbConnection();

  if (req.method === 'POST') {
    const { action, amenitiesId, amenities } = req.body;

    try {
      if (action === 'add') {
        const newFloor = new Amenities({ amenities });
        await newFloor.save();
        res.status(201).json(newFloor);
      } else if (action === 'edit') {
        const updatedFloor = await Amenities.findByIdAndUpdate(
          amenitiesId,
          { amenities },
          { new: true }
        );
        res.status(200).json(updatedFloor);
      } else if (action === 'delete') {
        await Amenities.findByIdAndDelete(amenitiesId);
        res.status(200).json({ message: 'Floor type deleted successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing request', error });
    }
  }
  else if(req.method==="GET"){
    try {
        const bhkList = await Amenities.find();
        res.status(200).json({ data: bhkList });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching Floor types', error });
      }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}