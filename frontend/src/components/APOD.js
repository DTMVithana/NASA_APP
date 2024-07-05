import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Background/Footer";
import Header from "./Background/Header";

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=2odf3ygbkwsz31zHnC5ctNFFwyTi8FgRsoKtc1lD"
        );
        console.log(response.data);
        setApodData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError("Access to the APOD API is forbidden. Check your API key.");
        } else {
          setError("Error fetching APOD. Please try again later.");
        }
      }
    };

    fetchAPOD();
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Astronomy Picture of the Day
        </h2>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          apodData && (
            <div>
              {apodData.media_type === "image" ? (
                <img src={apodData.url} alt={apodData.title} className="mb-4" />
              ) : apodData.media_type === "video" ? (
                <div className="video-container mb-4">
                  <iframe
                    title={apodData.title}
                    width="560"
                    height="315"
                    src={apodData.url}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p className="text-red-600">Unsupported media type</p>
              )}
              <p className="text-gray-700">{apodData.date}</p>
              <p className="text-xl font-semibold mb-2">{apodData.title}</p>
              <p className="text-gray-800">{apodData.explanation}</p>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default APOD;
