import React from "react";

const TaskForm = () => {
  return (
    <div className="is-flex is-justify-content-center">
      <form style={{ width: 350 }}>
        <div class="field">
          <label class="label" htmlFor="name">
            Name
          </label>
          <div class="control">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label" htmlFor="status">
            Status
          </label>
          <div class="control">
            <input
              name="status"
              class="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
