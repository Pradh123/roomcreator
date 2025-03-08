import React, { useState } from "react";

const Map = () => {
  const [mapUrl, setMapUrl] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left: Input Field */}
      <div className="w-[400px] h-[500px] p-4 border rounded-lg shadow-lg">
        <label className="block mb-2 text-lg font-semibold">
          Enter Map Embed URL:
        </label>
        <input
          type="text"
          placeholder="Paste your Google Maps embed URL here..."
          value={mapUrl}
          onChange={(e) => setMapUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right: Map Preview */}
      <div className="w-[400px] h-[500px] ml-4 border rounded-lg shadow-lg overflow-hidden">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Map preview will appear here...
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
