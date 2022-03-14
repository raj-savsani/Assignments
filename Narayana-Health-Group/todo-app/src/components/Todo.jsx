import React, { useState } from "react";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Button } from "antd";
import moment from "moment";

export function Todo() {
  const [task, setTask] = useState({ name: "", date: "", time: "" });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handelTimeChange = (a, timeString) => {
    // console.log("a", a);
    // console.log("time", timeString);

    setTask({ ...task, time: timeString });
  };

  function handelDateChange(date, dateString) {
    // console.log(date, dateString);
    setTask({ ...task, date: dateString });
  }

  console.log(task);

  const format = "HH:mm";

  return (
    <div>
      {/* for taking task name */}
      <Input
        style={style.taskName}
        placeholder="Enter Task name"
        name="name"
        value={task.name}
        onChange={handelChange}
      />
      {/* for taking date */}
      <DatePicker onChange={handelDateChange} />
      {/* for taking time */}
      <TimePicker
        onChange={handelTimeChange}
        defaultValue={moment("12:08", format)}
        format={format}
      />
      {/* add task */}

      <Button type="primary">Add Task</Button>
    </div>
  );
}

const style = {
  taskName: {
    width: "300px",
  },
};
