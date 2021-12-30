import React, { useState, useEffect } from "react";

function Timer({intial, goTill}) {
//   console.log('initial:', intial)
  const [counter, setCount] = useState(intial);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((p) => {
        if (p === goTill) {
          console.log(p);
          clearInterval(interval);
          return;
        }
        console.log(p);
        return p + 1;
      });
    }, 1000);

    return () => {
      //unmounting

      console.log("Unmounting");
      clearInterval(interval);
    };
  }, []);
  return <div>count is : {counter}</div>;
}

export default Timer;
