import { useState } from "react";

const BasicInfo = ({ setActiveTab, roomData }) => {
  const [formData, setFormData] = useState({
    apartmentType: "",
    bhkType: "",
    propertyAge: "",
    pricing: "",
    floor: "",
    totalFloors: "",
    buildUpArea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setActiveTab("Tab2");
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        Property Details
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Apartment Type */}
        <div>
          <label className="block text-gray-600 mb-1">Apartment Type</label>
          <select
            name="apartmentType"
            value={formData.apartmentType}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select</option>
            <option value="Studio">Studio</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
          </select>
        </div>

        {/* BHK Type */}
        <div>
          <label className="block text-gray-600 mb-1">BHK Type</label>
          <select
            name="bhkType"
            value={formData.bhkType}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
          </select>
        </div>

        {/* Property Age */}
        <div>
          <label className="block text-gray-600 mb-1">Property Age</label>
          <select
            name="propertyAge"
            value={formData.propertyAge}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Select</option>
            <option value="0-5 years">0-5 years</option>
            <option value="5-10 years">5-10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        {/* Pricing */}
        <div>
          <label className="block text-gray-600 mb-1">Pricing</label>
          <input
            type="text"
            name="pricing"
            placeholder="Enter price"
            value={formData.pricing}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Floor */}
        <div>
          <label className="block text-gray-600 mb-1">Floor</label>
          <input
            type="number"
            name="floor"
            placeholder="Enter floor number"
            value={formData.floor}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Total Floors */}
        <div>
          <label className="block text-gray-600 mb-1">Total Floors</label>
          <input
            type="number"
            name="totalFloors"
            placeholder="Total floors"
            value={formData.totalFloors}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Build Up Area */}
        <div>
          <label className="block text-gray-600 mb-1">
            Build Up Area (sq ft)
          </label>
          <input
            type="text"
            name="buildUpArea"
            placeholder="Enter area"
            value={formData.buildUpArea}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default BasicInfo;
