import React, { useState,useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tokens, setTokens] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("myData"));
    if (token) {
      setTokens(token);
    }
  }, []);
  
  const handleUpload = () =>{
    const Image = selectedImage;
    console.log(Image);
    const headers = {
      'Content-Type': 'application/json',
      'authorization': `${tokens}`,
    }
    axios.post("http://localhost:4000/upload",Image,headers)
    .then(response => console.log(response))
  }
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          axios.post("http://localhost:4000/upload")
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadAndDisplayImage;