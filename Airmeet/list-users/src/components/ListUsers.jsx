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

function ListUsers() {
  const { loading, users, error } = useSelector((state) => ({
    loading: state.loading,
    users: state.users,
    error: state.error,
  }));

  // const [users, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
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
    // setUser(data);
    // console.log(data);
  };

  const handelChange = (e) => {
    const { name, checked } = e.target;
    // console.log('name, checked:', name, checked)
    let tempData = users.map((el) =>
      el._id === name ? { ...el, isChecked: checked } : el
    );
    dispatch(setUser(tempData));
  };

  const handelDelete = () => {
    // let tempArr = [];
    // users.forEach((el) => {
    //   if (el?.isChecked === true) {
    //     tempArr.push(el._id);
    //   }
    // });

    let updatedData = users.filter((el) => (el?.isChecked ? false : true));
    dispatch(setUser(updatedData));
  };

  const handelFavourite = () => {};

  return (
    <div>
      <Button onClick={handelDelete} type="primary">
        Delete Selected User
      </Button>
      <Button onClick={handelFavourite} type="primary">
        Add To Favourite
      </Button>
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
                  <tr key={user._id}>
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
  );
}

export default ListUsers;
