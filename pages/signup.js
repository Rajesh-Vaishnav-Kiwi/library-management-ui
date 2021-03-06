import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [datas, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    adminCode: "",
  });
  const [userId, setUserId] = useState("");
  const [val, setVal] = useState(false);
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    const { fullName, email, password, role, adminCode } = datas;
    const user = { fullName, email, password, role, adminCode };
    const headers = {
      'Content-Type': 'application/json',
      // 'authorization': `${tokens}`,
    }
    if (user.role === "user") {
      axios
        .post("http://localhost:4000/signup", user)
        .then(function (response) {
          console.log(response);
          alert("welcome" + " "+ datas.fullName)
        })
        .then(()=>  router.push("./userLayout"))
    }
    if (user.role === "admin") {
      setUserId(true);
    }
    if (user.role === "admin") {
      {
        userId &&    
        axios
        .post("http://localhost:4000/signup", user)
        .then(function (response) {
          console.log(response);
          alert("welcome" + " "+ datas.fullName)
        })
    }
      (alert("Admin already exist,Please Login"))
      }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Ready To Sign Up</h1>
        <input
          type="text"
          {...register("fullName", { required: true })}
          onChange={(e) =>
            setData({ ...datas, [e.target.name]: e.target.value })
          }
          name="fullName"
          placeholder="enter your name"
        />
        {errors.fullName && " Fullname is required"}
        <br />
        <input
          type="email"
          {...register("email", { required: true })}
          onChange={(e) =>
            setData({ ...datas, [e.target.name]: e.target.value })
          }
          name="email"
          placeholder="enter your mail"
        />
        {errors.email?.type === "required" && "Email name is required"}
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          onChange={(e) =>
            setData({ ...datas, [e.target.name]: e.target.value })
          }
          name="password"
          placeholder="enter your password"
        />
        {errors.password?.type === "required" && "Password  is required"}
        <br />
        <input
          type="text"
          {...register("role", { required: true })}
          onChange={(e) =>
            setData({ ...datas, [e.target.name]: e.target.value })
          }
          name="role"
          placeholder="enter your role"
        />
        {errors.role?.type === "required" && "Role  is required"}
        <br />
        {userId && (
          <input
            type="text"
            {...register("adminCode", { required: true })}
            onChange={(e) =>
              setData({ ...datas, [e.target.name]: e.target.value })
            }
            name="adminCode"
            placeholder="enter your adminCode"
          />
        )}
        <br />
        <input type="submit" />
        <br />
        <h1>If already a user?Do click on Login</h1>
        <button onClick={() =>router.push("./login")}>Login</button>
      </form>
    </div>
  );
}
