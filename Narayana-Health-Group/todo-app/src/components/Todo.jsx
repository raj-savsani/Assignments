import React, { useContext, useState } from "react";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Button } from "antd";
import moment from "moment";
import TodoContext from "../context/TodoContext";
import { nanoid } from "nanoid";

export function Todo() {
  const [task, setTask] = useState({
    name: "",
    date: "",
    time: "",
    status: false,
  });

  //   const [todos, setTodos] = useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value.toUpperCase() });
  };

  const handelTimeChange = (a, timeString) => {
    setTask({ ...task, time: timeString });
  };

  function handelDateChange(date, dateString) {
    setTask({ ...task, date: dateString });
  }

  const { addTodo } = useContext(TodoContext);

  const handelTodo = () => {
    if (task.name !== "" && task.date !== "" && task.time !== "") {
      let id = nanoid(6);
      addTodo({ ...task, id: id });
    } else if (task.date === "") {
      alert("Please Enter Date");
    } else if (task.time === "") {
      alert("Please Enter time");
    } else {
      alert("Please Enter Task name");
    }
  };

  const format = "HH:mm";

  return (
    <>
      <h1> TODO APP </h1>
      <div className="task">
        <Input
          style={style.taskName}
          placeholder="Enter Task name"
          name="name"
          required
          value={task.name}
          onChange={handelChange}
        />

        <DatePicker
          disabledDate={(current) => {
            return current && current < moment().subtract(1, "days");
          }}
          onChange={handelDateChange}
        />

        <TimePicker onChange={handelTimeChange} format={format} />

        <Button onClick={handelTodo} type="primary">
          Add Task
        </Button>
      </div>
    </>
  );
}

const style = {
  taskName: {
    width: "300px",
  },
};
