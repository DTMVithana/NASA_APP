import React, { useState } from "react";

const LandsatImagery = () => {
  // State to store selected location and date
  const [selectedLocation, setSelectedLocation] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [error, setError] = useState(null);

  // Array of locations
  const locations = [
    { name: "Downtown Houston, Texas, USA", lon: -95.3698, lat: 29.7604 },
    { name: "New York City, New York, USA", lon: -74.006, lat: 40.7128 },
    // Add more locations as needed
  ];

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // API endpoint URL
      const apiUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${selectedLocation.lon}&lat=${selectedLocation.lat}&date=${date}&api_key=2odf3ygbkwsz31zHnC5ctNFFwyTi8FgRsoKtc1lD`;

      // Fetch data from the API
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error fetching Landsat imagery");
      }
      const data = await response.json();

      // Update the state with the retrieved image URL
      setImageURL(data.url);
    } catch (error) {
      console.error("Error fetching Landsat imagery:", error);
      setError("Error fetching Landsat imagery. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Landsat 8 Imagery</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <select
            value={selectedLocation}
            onChange={(e) =>
              setSelectedLocation(
                locations.find((loc) => loc.name === e.target.value)
              )
            }
          >
            <option value="">Select a location</option>
            {locations.map((location, index) => (
              <option key={index} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Get Imagery</button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      {imageURL && (
        <div>
          <h3>Image:</h3>
          <img src={imageURL} alt="Landsat 8 Imagery" />
        </div>
      )}
    </div>
  );
};

export default LandsatImagery;
