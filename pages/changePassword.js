import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
const changePassword = () => {
  <Head>
    <title>ChangePassword</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  const [route, setRoute] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [tokens, setTokens] = useState("");
  const [pass, setPass] = useState({
    password: "",
    newPassword: "",
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("myData"));
    if (token) {
      setTokens(token);
    }
  }, []);
  console.log(tokens);
  const onSubmit = (data) => {
    console.log(data);
    const { password, newPassword } = pass;
    const val = { password, newPassword };
    const headers = {
      "Content-Type": "application/json",
      authorization: `${tokens}`,
    };
    axios
      .post("http://localhost:4000/changePassword", val, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        setRoute(true);
      });
    if (route === true) {
      window.alert("Password has been changed successfully");
    } else if (!password) {
      window.alert("Old Password is incorrect");
    }
  };
  const handleLogin = () => {
    if (route === true) {
      router.push("./login");
    }
  };

  return (
    <>
  <Head>
        <title>Change Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Change Your Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            onChange={(e) =>
              setPass({ ...pass, [e.target.name]: e.target.value })
            }
            {...register("password", { required: true })}
            name="password"
            type="password"
            placeholder="enter your old password"
          />
          {errors.password?.type === "required" && "Old Password  is required"}
          <br />
          <input
            onChange={(e) =>
              setPass({ ...pass, [e.target.name]: e.target.value })
            }
            {...register("newPassword", { required: true })}
            name="newPassword"
            type="password"
            placeholder="enter your new password"
          />
          {errors.newPassword?.type === "required" &&
            "New Password  is required"}
          <br />
          <input type="submit" value="Change Password" />
          <br />
          <h1>Login Again If password has been changed</h1>
          <input value="login" type="button" onClick={() => handleLogin()} />
        </form>
      </div>
    </>
  );
};
export default changePassword;
