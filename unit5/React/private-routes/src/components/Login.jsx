import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/Auth";

function Login() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const { handelToken } = useContext(AuthContext);

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
    <Form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h1>Login</h1>
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
      </div>
    </Form>
  );
}

const Form = styled.form`
  width: 300px;
  heigth: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  div {
    margin-top: 50px;
  }
  input {
    margin: 2%;
    font-size: 25px;
  }
  button {
    border-radius: 15px;
    outline: none;
    border-color: #557c55;
    margin: 40px;
    font-size: 25px;
    background-color: #a3da8d;
  }
`;

export default Login;
