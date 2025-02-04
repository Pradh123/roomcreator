
import PropertyAge from "@/models/Others/PropertyAge";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
  await DbConnection();

  if (req.method === 'POST') {
    const { action, propertyAgeId, propertyAge } = req.body;

    try {
      if (action === 'add') {
        const newPropertyAge = new PropertyAge({ propertyAge });
        await newPropertyAge.save();
        res.status(201).json(newPropertyAge);
      } else if (action === 'edit') {
        const updatedPropertyAge = await PropertyAge.findByIdAndUpdate(
          propertyAgeId,
          { propertyAge },
          { new: true }
        );
        res.status(200).json(updatedPropertyAge);
      } else if (action === 'delete') {
        await PropertyAge.findByIdAndDelete(propertyAgeId);
        res.status(200).json({ message: 'PropertyAge type deleted successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing request', error });
    }
  }
  else if(req.method==="GET"){
    try {
        const bhkList = await PropertyAge.find();
        res.status(200).json({ data: bhkList });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching PropertyAge types', error });
      }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}