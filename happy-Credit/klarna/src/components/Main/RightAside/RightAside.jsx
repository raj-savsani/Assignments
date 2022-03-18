import React from "react";
import "./RightAside.css";
import { data } from "../../Data/data.js";

function RightAside() {
  return (
    <div className="right-aside">
      <div className="searchbar-div">
        <div>
          <svg
            focusable="false"
            height="20"
            width="20"
            class="sc-iCfMLu fFietw"
          >
            <path
              d="M9,10.983 C10.378,10.983 11.5,9.862 11.5,8.483 C11.5,7.104 10.378,5.983 9,5.983 C7.622,5.983 6.5,7.104 6.5,8.483 C6.5,9.862 7.622,10.983 9,10.983 Z M9,3.983 C11.481,3.983 13.5,6.002 13.5,8.483 C13.5,9.61 13.069,10.629 12.382,11.419 L14.913,14.713 L13.327,15.932 L10.778,12.614 C10.232,12.849 9.632,12.983 9,12.983 C6.519,12.983 4.5,10.964 4.5,8.483 C4.5,6.002 6.519,3.983 9,3.983 Z"
              fill="rgba(23, 23, 23, 1)"
            ></path>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="img-div">
        {data.map((el, i) => (
          <div key={i}>
            <img src={el.image} alt="img"></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightAside;
