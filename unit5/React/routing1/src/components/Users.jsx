import React from "react";
import { Link } from "react-router-dom";

function Users() {
  const User = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {User.map((e, i) => 
        <div key={i}>
          <Link to={`/users/${e}`}> User {e}</Link>
        </div>
      )}
    </div>
  );
}

export default Users;
