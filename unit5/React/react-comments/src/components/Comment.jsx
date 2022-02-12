import React, { useState } from "react";

function Comment({ reply }) {
  const [expand, setExpand] = useState(false);

  if (reply.replies) {
    return (
      <div className="comment">
        <ul>
          <div className="bdr">
            <div className="thread">
              <li style={{ color: "#FEECE9", fontSize: "20px" }}>
                {" "}
                <b> {reply.author} </b>{" "}
              </li>
              <li>{reply.timestamp}</li>
            </div>
            <h4>{reply.body}</h4>
            <button onClick={() => setExpand(!expand)}>
              {expand ? "Hide Reply" : "Show Reply"}
            </button>
          </div>

          {expand ? (
            <>
              {reply.replies.map((el) => {
                return <Comment key={el.id} reply={el} />;
              })}
            </>
          ) : null}
        </ul>
      </div>
    );
  }

  return (
    <div className="comment">
      <ul key={reply.id}>
        <div className="bdr">
          <div className="thread">
            <li style={{ color: "#FEECE9", fontSize: "20px" }}>
              {" "}
              <b> {reply.author} </b>{" "}
            </li>
            <li>{reply.timestamp}</li>
          </div>
          <h4>{reply.body}</h4>
        </div>
      </ul>
    </div>
  );
}

export default Comment;
