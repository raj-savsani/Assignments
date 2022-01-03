import React from "react";
import("./CSS/Form.css");

function Form({ setFormdata, formdata, data, setData }) {
  const [form, setForm] = React.useState(null);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3006/user-details")
      .then((res) => res.json())
      .then((res) => {
        setFormdata(res);
        setData(res);
      });
  };

  const filter = (e) => {
    // console.log(e.target.value);
    setData(
      formdata.filter((d) => {
        if (e.target.value === d.department) {
          return d;
        } else if (e.target.value === "all") {
          return d;
        }
      })
    );
  };

  const sort = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "descending") {
      let dec = data.sort((a, b) => {
        return b.salary - a.salary;
      });
      setData(dec);
      // console.log('dec:', dec)
      // console.log(data);
    } else {
      setData(
        data.sort((a, b) => {
          return a.salary - b.salary;
        })
      );
    }
  };
  console.log("data", data);

  const handelSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
    };

    fetch("http://localhost:3006/user-details", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    getData();
    // setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={handelSubmit}>
        <input
          type="text"
          onChange={handelChange}
          name="name"
          placeholder="Enter name"
        />
        <br />
        <input
          type="number"
          onChange={handelChange}
          name="age"
          placeholder="Enter age"
        />
        <br />
        <input
          type="text"
          onChange={handelChange}
          name="address"
          placeholder="Enter Address"
        />
        <br />
        <select onChange={handelChange} name="department">
          <option></option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="devOps">DevOps</option>
          <option value="Project manager">Project Manager</option>
        </select>

        <input
          type="number"
          onChange={handelChange}
          name="salary"
          placeholder="Enter Salary"
        />
        <br />
        <label>
          <input
            type="radio"
            value="married"
            onChange={handelChange}
            name="marital"
          />
          Married
        </label>

        <label>
          <input
            type="radio"
            value="unmarried"
            onChange={handelChange}
            name="marital"
          />
          Unmarried
        </label>
        <br />

        <input
          type="file"
          onChange={handelChange}
          name="photo"
          placeholder="email"
        />
        <br />
        <input id="submit" type="submit" value="submit" />
      </form>

      <div>
        <label>
          department Filter
          <select onChange={(e) => filter(e)}>
            <option value="all"></option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devOps">DevOps</option>
            <option value="Project manager">Project Manager</option>
          </select>
        </label>
        <label>
          salary sort
          <select onChange={(e) => sort(e)}>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Form;
