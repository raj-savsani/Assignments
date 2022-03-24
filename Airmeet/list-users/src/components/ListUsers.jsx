import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserError,
  getUserLoading,
  getUserSuccess,
  setUser,
} from "../Store/action";
import { Link } from "react-router-dom";

function ListUsers() {
  const { loading, users, error } = useSelector((state) => ({
    loading: state.loading,
    users: state.users,
    error: state.error,
  }));

  // const [users, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("fav", "[]");
    getData();
  }, []);

  const getData = async () => {
    dispatch(getUserLoading());
    axios
      .get("https://listdatabase.herokuapp.com/user")
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserError());
      });
  };

  const handelChange = (e) => {
    const { name, checked } = e.target;

    let tempData = users.map((el) =>
      el._id === name ? { ...el, isChecked: checked } : el
    );
    dispatch(setUser(tempData));
  };

  const handelDelete = () => {
    let updatedData = users.filter((el) => (el?.isChecked ? false : true));
    dispatch(setUser(updatedData));
  };

  const handelFavourite = () => {
    let tempArr = [];
    users.forEach((el) => {
      if (el?.isChecked === true) {
        tempArr.push(el);
      }
    });

    let updatedData = users.filter((el) => (el?.isChecked ? false : true));
    dispatch(setUser(updatedData));
    let Favourite = JSON.parse(localStorage.getItem("fav"));
    if (Favourite) {
      let newFav = [...Favourite, ...tempArr];
      localStorage.setItem("fav", JSON.stringify(newFav));
    } else {
      localStorage.setItem("fav", JSON.stringify(tempArr));
    }
  };

  return (
    <>
      {loading ? (
        <h1> Loading... </h1>
      ) : error ? (
        <h1>Something went wrong...</h1>
      ) : (
        <div>
          <Button
            style={{ marginLeft: "10px", backgroundColor: "#F44336" }}
            onClick={handelDelete}
            type="primary"
          >
            Delete Selected User
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={handelFavourite}
            type="primary"
          >
            Add To Favourite
          </Button>
          <Link to="/favourite">
            <Button
              style={{ marginLeft: "10px", backgroundColor: "#00E676" }}
              type="primary"
            >
              Go To Favourite
            </Button>
          </Link>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr
                        style={
                          user.isChecked ? { backgroundColor: "#9CCC65" } : null
                        }
                        key={user._id}
                      >
                        <td>
                          <input
                            type="checkbox"
                            className="checkbox"
                            name={user._id}
                            checked={user.isChecked || false}
                            onChange={handelChange}
                          ></input>
                        </td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ListUsers;
