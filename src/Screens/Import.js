import React, { useState } from "react";
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import './Import.css'

export default function Import() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [answer, setAnswer] = useState('');
  const [isValidAnswer, setisValidAnswer] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setisValidAnswer(false)

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }

  };

  const postImage = async () => {
    try {
      if (!selectedImage) {
        alert("No image selected");
        return;
      }
      setisValidAnswer(true)

      const formData = new FormData();
      formData.append("image", dataURLtoFile(selectedImage));

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          "Authorization": localStorage.getItem("auth"),
        },
        body: formData
      });

      const answerData = await response.json();
      setAnswer(answerData);
      console.log(answerData)

    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const dataURLtoFile = (dataUrl) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], "image.png", { type: mime });
  };

  return (
    <div>
      {localStorage.getItem("auth") ?
        (<div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '85px' }}>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Women-breast-cancer-logo-diagnosis-with-stethoscope-by-hartgraphic-1-580x386.jpg" alt="Logo" style={{ width: '100px', height: '80px', marginLeft: "5px" }}></img>
            <div className="heading">
              <h3>Breast Cancer Classifier</h3>
            </div>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <Link className="navbar-brand btn bg-warning text-white" to="/">Home</Link>
              <button type="button" className="btn btn-success mx-3" onClick={postImage}>Predict</button>
            </div>
          </nav>
          <div className="preview mx-3 my-3">
            <label htmlFor="imageInput">Select an Image:</label>
            <input className="select-image mx-2 "
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
            />

            {selectedImage && (
              <div className="ig">
                <p>Preview:</p>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '60%' }} />

              </div>

            )}
          </div>
          <div className='display'>
            {isValidAnswer ? (
              <h1 className="predicts mx-5">Predicted Cancer : {answer.prediction}</h1>
            ) : ""}
          </div>
          <Footer/>
        </div>) : ""}
    </div>
  );
}
