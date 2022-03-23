import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserError, getUserLoading, getUserSuccess } from "../Store/action";

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
        console.log(res);
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserError());
      });
    // setUser(data);
    // console.log(data);
  };

  return (
    <>
      {/* <Button onClick={clearCompleted} type="primary">
        Clear All Completed
      </Button> */}
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <tr className="notdone" key={user._id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button onClick={() => user.id} type="primary">
                        {user.status ? "Done" : "Not Done"}
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{ background: "#F44336" }}
                        onClick={() => user.id}
                        type="primary"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListUsers;
