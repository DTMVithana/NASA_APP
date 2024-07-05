import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "../components/Background/Header";
import Footer from "../components/Background/Footer";
import { saveImageToProfile } from "../apiService";

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2odf3ygbkwsz31zHnC5ctNFFwyTi8FgRsoKtc1lD"
      );
      setPhotos(response.data.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const images = photos.map((photo) => ({
    original: photo.img_src,
    thumbnail: photo.img_src,
    description: `Mars Rover Photo ${photo.id}`,
  }));

  const handleSaveImage = async () => {
    if (!selectedImage) {
      console.warn("No image selected to save.");
      return;
    }

    setIsLoading(true);

    try {
      const userId = localStorage.getItem("userId");
      const imageUrl = selectedImage.original;

      let savedImageUrls = JSON.parse(localStorage.getItem(userId)) || [];
      savedImageUrls.push(imageUrl);
      localStorage.setItem(userId, JSON.stringify(savedImageUrls));

      await saveImageToProfile(userId, savedImageUrls); // Save all image URLs to the user's profile
      console.log("Image URLs saved to profile successfully!");
    } catch (error) {
      console.error("Error saving image URLs to profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto mt-8 relative">
        <h2 className="text-2xl font-bold mb-4">Mars Rover Photos</h2>
        {photos.length > 0 ? (
          <>
            <ImageGallery
              items={images}
              showPlayButton={false}
              onSlide={(index) => setSelectedImage(images[index])}
            />
            <button
              onClick={handleSaveImage}
              disabled={!selectedImage || isLoading}
              className={`absolute top-0 right-0 mt-2 mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isLoading && "opacity-50 cursor-not-allowed"
              } pb-2 mb-3`}
            >
              {isLoading ? "Saving..." : "Save Image"}
            </button>
          </>
        ) : (
          <p className="text-gray-600">No photos available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MarsRoverPhotos;
