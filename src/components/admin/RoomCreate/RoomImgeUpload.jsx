import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const RoomImageUpload = ({ setActiveTab, roomData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageAltText, setImageAltText] = useState("");
  const [imageList, setImageList] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleAltTextChange = (e) => {
    setImageAltText(e.target.value);
  };

  const handleAddImage = () => {
    if (selectedImage && imageAltText) {
      setImageList([...imageList, { src: selectedImage, alt: imageAltText }]);
      setSelectedImage(null);
      setImageAltText("");
    } else {
      alert("Please select an image and provide alt text.");
    }
  };

  const handleDeleteImage = (index) => {
    setImageList(imageList.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (imageList.length === 0) {
      alert("No images to submit.");
      return;
    }
    alert("Images submitted successfully!");
    setActiveTab("Tab3");
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Image</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="flex-1 border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          value={imageAltText}
          onChange={handleAltTextChange}
          placeholder="Enter alt text"
          className="flex-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {selectedImage && (
        <div className="mb-4">
          <h3 className="text-gray-700 text-base  mb-2">Image Preview:</h3>
          <Image
            src={selectedImage}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-lg border border-gray-300"
            height={400}
            width={400}
          />
        </div>
      )}

      <button
        onClick={handleAddImage}
        className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition mb-4"
      >
        Add Image
      </button>

      {imageList.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Uploaded Images
          </h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Alt Text</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {imageList.map((img, index) => (
                <tr key={index} className="text-center">
                  <td className="border   border-gray-300 px-4 py-2">
                    <Image
                      height={400}
                      width={400}
                      src={img.src}
                      alt={img.alt}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {img.alt}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className=" text-white px-3 py-1 rounded-md "
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="mt-1   text-lg text-red-500 cursor-pointer"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className=" py-5">
        <button
          onClick={handleSubmit}
          className="w-full bg-gray-900 text-white py-2 rounded-md  transition mb-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RoomImageUpload;
