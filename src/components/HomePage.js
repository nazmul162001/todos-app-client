import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center pt-5 px-14 md:px-0">
      <div className="todos-app w-full md:w-2/4 lg:w-1/4">
        <h1 className="todo-title text-center text-3xl font-bold text-gray-500 pb-3">Add Your Daily Task</h1>
        <form>
          <input
            type="text"
            placeholder="Task Name"
            class="input input-bordered input-success w-full mb-3"
          />
          <br />
          <textarea
            class="textarea textarea-success w-full"
            placeholder="Task Description"
          ></textarea>
          <div className="task-submit-btn w-full">
            <input className='btn btn-primary w-full' type="submit" value="Add Task" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
