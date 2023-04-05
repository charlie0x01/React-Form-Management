import React from "react";

const TaskForm = () => {
  return (
    <div className="is-flex is-justify-content-center">
      <form className="" style={{ width: 350 }}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="Username" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Channel</label>
          <div className="control">
            <input className="input" type="text" placeholder="Channel" />
          </div>
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
