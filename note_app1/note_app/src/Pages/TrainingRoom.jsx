import React, { useState, useRef } from "react";

import Footer from "../AppComps/Footer";
import WebCam from "react-webcam";
import Header from "../AppComps/Header";
export default function TrainingRoom() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return (
    <div className="Home">
      <Header />
      <main className="mainSec">
        {isCameraOpen && ( // conditional rendering : if isCameraOpen then do w/e comes after &&.
          <WebCam 
            ref={webcamRef}
            style={{
              position: "absolute",
              width: "55vw",
              height: "50vh",
              zIndex: 9,
              marginBottom: 100,
              textAlign: "center",
              borderRadius: "30%",
            }}
          />
        )}

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            width: "55vw",
            height: "50vh",
            zIndex: 9,
            marginBottom: 100,
            textAlign: "center",
            borderRadius: "30%",
          }}
        />

        <button
          className={`cameraBtn ${!isCameraOpen && "closeCam"}`}
          onClick={() => setIsCameraOpen(!isCameraOpen)}
        >
          +
        </button>
      </main>
      <Footer />
    </div>
  );
}
