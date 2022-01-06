import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Authcontext } from "../context/Auth";

function UserDetails() {
  const { userid } = useParams();
  const [user, setUser] = React.useState({});

  

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://reqres.in/api/users/${userid}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
      });
  };

    return (
      <div>
        <img src={user.avatar} alt={user.first_name} />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>{user.email}</p>
      </div>
    );
  
}

export default UserDetails;
