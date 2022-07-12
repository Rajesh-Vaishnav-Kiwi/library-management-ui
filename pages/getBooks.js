import React,{useState,useEffect} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios"
const getBooks = () => {
    const [tokens, setTokens] = useState("");
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("myData"));
        if (token) {
          setTokens(token);
        }
      }, []);
    const handleBooks = () =>{
        const headers = {
            'Content-Type': 'application/json',
            'authorization': `${tokens}`,
          }
        axios.get("http://localhost:4000/books",{headers:headers})
        .then(res =>console.log(res))
    }
  return (
    <>
      <Head>
        <title>Get Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Hii Do you want to see the book?</h1>
        <h1>Click On</h1>
        <button onClick={(e)=>handleBooks(e)}>Get Books</button>
      </div>
    </>
  );
};

export default getBooks;
