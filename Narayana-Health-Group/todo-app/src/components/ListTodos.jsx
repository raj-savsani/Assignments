import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { Table, Tag, Space } from "antd";

function ListTodos() {
  const { todos } = useContext(TodoContext);
  console.log("todos:", todos);
  const columns = [
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      key: "time",
      dataIndex: "time",
      render: (tags) => (
        <>
          {todos.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  /*

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',

    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
  ];
  */

  return (
    <div>
      {}
      <Table columns={columns} dataSource={todos} />
    </div>
  );
}

export default ListTodos;
