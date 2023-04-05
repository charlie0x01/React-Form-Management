import React from "react";
import { useFormik } from "formik";

const initValues = {
  name: "",
  status: "In Progress",
};

const TaskForm = () => {
  const formik = useFormik({
    initialValues: initValues,
  });

  console.log("Values Change: ", formik.values);
  return (
    <div className="is-flex is-justify-content-center">
      <form style={{ width: 350 }}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Text input"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="status">
            Status
          </label>
          <div className="select">
            <select
              name="status"
              onChange={formik.handleChange}
              value={formik.values.status}
            >
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
