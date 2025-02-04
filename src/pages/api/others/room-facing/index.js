
import RoomFacing from "@/models/Others/RoomFacing";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
  await DbConnection();

  if (req.method === 'POST') {
    const { action, roomFacingId, roomFacing } = req.body;

    try {
      if (action === 'add') {
        const newRoomFacing = new RoomFacing({ roomFacing });
        await newRoomFacing.save();
        res.status(201).json(newRoomFacing);
      } else if (action === 'edit') {
        const updatedRoomFacing = await RoomFacing.findByIdAndUpdate(
          roomFacingId,
          { roomFacing },
          { new: true }
        );
        res.status(200).json(updatedRoomFacing);
      } else if (action === 'delete') {
        await RoomFacing.findByIdAndDelete(roomFacingId);
        res.status(200).json({ message: 'RoomFacing type deleted successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing request', error });
    }
  }
  else if(req.method==="GET"){
    try {
        const bhkList = await RoomFacing.find();
        res.status(200).json({ data: bhkList });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching RoomFacing types', error });
      }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}