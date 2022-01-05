import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userid } = useParams();
  console.log("userid:", userid);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://reqres.in/api/users/${userid}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
        console.log("res.data:", res.data);
      });
    console.log("getdata func call");
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
