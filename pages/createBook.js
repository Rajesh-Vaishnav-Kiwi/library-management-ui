import React, { useState,useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import Head from "next/head";
import axios from "axios";
const createBook = () => {
 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [values, setValue] = useState({
    title: "ramayan",
    author: "valmiki",
    ISBN: "123456789",
  });
  const [tokens, setTokens] = useState("");
  const [bookId,setBookId] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("myData"));
    if (token) {
      setTokens(token);
    }
  }, []);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("BookId"));
    if (token) {
      setBookId(token);
    }
  }, []);

  console.log(tokens);
  const onSubmit =  (data) => {
    console.log(data);
    
    const { title, author,ISBN } = values;
    const val = { title, author,ISBN };
    const headers = {
        'Content-Type':'application/json',
        'authorization': `${tokens}`,
      }
    axios.post("http://localhost:4000/book",val,{headers:headers})
    .then(res =>
      {   console.log(res.data)
    alert("New Book Issued")
    localStorage.setItem("BookId", JSON.stringify(res.data.newBook._id));
      }).catch(res => alert(res.response.data.Message))
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>CreateBook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Your Book</h1>
        <input
          onChange={(e) =>
            setValue({ ...values, [e.target.name]: e.target.value })
          }
          {...register("title", { required: true })}
          name="title"
          type="text"
          placeholder="enter your book title"
        />
        {errors.title?.type === "required" && "Title  is required"}
        <br />
        <input
          onChange={(e) =>
            setValue({ ...values, [e.target.name]: e.target.value })
          }
          {...register("author", { required: true })}
          name="author"
          type="text"
          placeholder="enter your book author"
        />
        {errors.author?.type === "required" && "Author  is required"}
        <br />
        <input
          onChange={(e) =>
            setValue({ ...values, [e.target.name]: e.target.value })
          }
          {...register("ISBN", { required: true })}
          name="ISBN"
          type="text"
          placeholder="enter your ISBN number"
        />
        {errors.ISBN?.type === "required" && "ISBN is required"}
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default createBook;
