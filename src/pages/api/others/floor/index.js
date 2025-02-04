
import Floor from "@/models/Others/Floor";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
  await DbConnection();

  if (req.method === 'POST') {
    const { action, floorId, floor } = req.body;

    try {
      if (action === 'add') {
        const newFloor = new Floor({ floor });
        await newFloor.save();
        res.status(201).json(newFloor);
      } else if (action === 'edit') {
        const updatedFloor = await Floor.findByIdAndUpdate(
          floorId,
          { floor },
          { new: true }
        );
        res.status(200).json(updatedFloor);
      } else if (action === 'delete') {
        await Floor.findByIdAndDelete(floorId);
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
        const bhkList = await Floor.find();
        res.status(200).json({ data: bhkList });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching Floor types', error });
      }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}