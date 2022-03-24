import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Favourite() {
  const { loading, users, error } = useSelector((state) => ({
    loading: state.loading,
    users: state.users,
    error: state.error,
  }));

  const [fav, setFav] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("fav"));
    setFav([...data]);
  }, [users]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {fav.length > 0 &&
            fav.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Favourite;
