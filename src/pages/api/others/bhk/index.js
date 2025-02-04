import BHK from "@/models/Others/BhkType";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
  await DbConnection();

  if (req.method === 'POST') {
    const { action, bhkId, bhkType } = req.body;

    try {
      if (action === 'add') {
        const newBHK = new BHK({ bhkType });
        await newBHK.save();
        res.status(201).json(newBHK);
      } else if (action === 'edit') {
        const updatedBHK = await BHK.findByIdAndUpdate(
          bhkId,
          { bhkType },
          { new: true }
        );
        res.status(200).json(updatedBHK);
      } else if (action === 'delete') {
        await BHK.findByIdAndDelete(bhkId);
        res.status(200).json({ message: 'BHK type deleted successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing request', error });
    }
  }
  else if(req.method==="GET"){
    try {
        const bhkList = await BHK.find();
        res.status(200).json({ data: bhkList });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching BHK types', error });
      }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}