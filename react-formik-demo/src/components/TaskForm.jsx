import React from "react";
import { useFormik } from "formik";

const initValues = {
  name: "",
  status: "In Progress",
};

const onSubmit = (values) => {
  console.log("Form Submit: ", values);
};

const validate = (values) => {
  let errors = {};

  // validate input values
  if (!values.name) errors.name = "Required";
  if (values.name.length > 15) errors.name = "Must be 15 characters or less";

  if (!values.status) errors.status = "Required";

  return errors;
};

const TaskForm = () => {
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmit,
    validate: validate,
  });
  console.log("Errors: ", formik.errors);
  return (
    <div className="is-flex is-justify-content-center">
      <form style={{ width: 350 }} onSubmit={formik.handleSubmit}>
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
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
              onBlur={formik.handleBlur}
              value={formik.values.status}
            >
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            {formik.touched.status && formik.errors.status ? (
              <div className="error">{formik.errors.status}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="button is-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
