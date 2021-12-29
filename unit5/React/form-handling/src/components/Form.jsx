import React from "react";
import { nanoid } from "nanoid";
import("./CSS/Form.css");

function Form({ setFromdata, formdata }) {
  const [form, setForm] = React.useState(null);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  
  const giveid = () => {
    setForm({ ...form, id: nanoid(6) });
  };


  const handelSubmit = (e) => {
    e.preventDefault();
    giveid();
    console.log("form:", form);
    setFromdata([...formdata, form]);
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
    </div>
  );
}

export default Form;
