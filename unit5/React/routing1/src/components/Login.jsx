import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/Auth";

function Login() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const { handelToken } = useContext(Authcontext);

  const handelChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const getToken = () => {
    try {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(({ token }) => {
          handelToken(token);
          navigate(-1);
        });
    } catch (e) {
      //
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={handelChange}
        name="email"
        type="text"
        placeholder="Enter Email"
      ></input>
      <input
        onChange={handelChange}
        name="password"
        type="password"
        placeholder="Enter Password"
      ></input>
      <button onClick={getToken}>Sign In</button>
    </form>
  );
}

export default Login;
