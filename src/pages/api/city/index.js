import City from "@/models/City/City";
import SubCity from "@/models/City/SubCity";
import DbConnection from "@/utils/db";

const cityApi = async (req, res) => {
  DbConnection();
  if (req.method === "POST") {
    try {
      const { localLocation } = req.body;
      const data = await City.create({ name: localLocation });
      if (!data) {
        return res.status(300).json({ message: "something went wrong" });
      }
      return res.status(201).json({ message: "City added successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  else if (req.method === "DELETE") {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Id is required !!!" });
        }

        const citydata = await City.findById(id);

        if (!citydata) {
            return res.status(404).json({ message: "City not found" });
        }

        if (citydata.subCity && citydata.subCity.length > 0) {
            for (let subCityId of citydata.subCity) {
                await SubCity.findByIdAndDelete(subCityId);
            }
        }

        await City.findByIdAndDelete(id);

        return res.status(200).json({ message: "City deleted successfully" });
    } catch (error) {
        console.error("Error deleting city:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}
 else if (req.method === "PUT") {
    try {
      const { localLocation } = req.body;
      const { id } = req.query;
      if (!id) {
        return res.status(301).json({ message: "Id is required !!!" });
      }
      const data = await City.findOneAndUpdate(
        { _id: id },
        { $set: { name: localLocation } }
      );
      if (!data) {
        return res.status(300).json({ message: "something went wrong" });
      }
      return res.status(200).json({ message: "City updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    try {
      const data = await City.find({});
      if (!data && data.length === 0) {
        return res.status(400).json({ message: "not found" });
      }
      return res.status(201).json({ message: "found", data });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
export default cityApi;
