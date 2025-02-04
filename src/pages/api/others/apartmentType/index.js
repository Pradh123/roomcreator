// pages/api/apartmentType/index.js
import ApartmentType from "@/models/Others/ApartmentType";
import DbConnection from "@/utils/db";

export default async function handler(req, res) {
await DbConnection();

  if (req.method === "POST") {
    const { action, apartmentTypeId, apartmentType } = req.body;

    try {
      if (action === "add") {
        const newApartmentType = new ApartmentType({ apartmentType });
        await newApartmentType.save();
        res.status(201).json(newApartmentType);
      } else if (action === "edit") {
        const updatedApartmentType = await ApartmentType.findByIdAndUpdate(
          apartmentTypeId,
          { apartmentType },
          { new: true }
        );
        res.status(200).json(updatedApartmentType);
      } else if (action === "delete") {
        await ApartmentType.findByIdAndDelete(apartmentTypeId);
        res
          .status(200)
          .json({ message: "Apartment type deleted successfully!" });
      } else {
        res.status(400).json({ message: "Invalid action" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error processing request", error });
    }
  }
  else if(req.method==="GET"){
    try {
        const apartmentTypes = await ApartmentType.find();
        res.status(200).json({ data: apartmentTypes });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching apartment types', error });
      }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
