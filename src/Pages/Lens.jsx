import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";
import "./lens.css"; // Ensure the correct path
import imgL from "./lens-img.png";
import cars from "../assets/data";
import { Link, useNavigate } from "react-router-dom";

const Lens = (props) => {
  const [id, setId] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [carModel, setCarModel] = useState("");
  const navigate = useNavigate();

  const scanImage = async (picture) => {
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = async () => {
      const base64Image = reader.result.split(",")[1]; // Extract base64 part of the image
      try {
        const response = await axios.post(
          "https://detect.roboflow.com/car-models-classification/3",
          base64Image,
          {
            params: { api_key: "kuO4ruffLv1P6LlCOd4A" },
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );

        console.log(response.data);

        const detectedCarModel = response.data.predictions[0].class;
        setCarModel(detectedCarModel); // Assuming 'class' contains the car model
        const carName = detectedCarModel.toUpperCase();

        const data = cars.find((car) => car.name === carName);
        console.log(data);
        setId(data.id);
        navigate(`/chatbot/${id}`);
        props.onCarModelDetected(detectedCarModel); // Pass the detected car model to parent
      } catch (error) {
        console.error("Error scanning image:", error);
      }
    };
  };

  const onDrop = (pictureFiles) => {
    setPictures(pictureFiles);
    if (pictureFiles.length > 0) {
      scanImage(pictureFiles[0]);
    }
  };

  return (
    <div className="d-main">
      <div className="drop">
        <div className="lens-image">
          <img src={imgL} height={5} />
        </div>
        <div className="image-upload">
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png"]}
            maxFileSize={5242880}
          />
          <div className="drop-text">
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
        {carModel && (
          <div className="car-model">
            <p>Detected Car Model: {carModel}</p>
            <div>
              <Link to={`/chatbot/${id}`}>Know More</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lens;
