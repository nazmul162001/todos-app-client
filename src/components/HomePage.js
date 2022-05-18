import React from 'react';
import DisplayTodos from './DisplayTodos';
import { BsListTask } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div className="todos-app w-full h-screen flex justify-center pt-5 px-14 md:px-0">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <h1 className="todo-title text-center text-3xl font-bold text-gray-500 pb-3">
          Add Your Daily Task
        </h1>
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
            <button className="btn btn-primary w-full  text-base">
              <input className='cursor-pointer' type="submit" value="Add Task " />
              <BsListTask className="text-xl" />
            </button>
          </div>
        </form>
        <DisplayTodos />
      </div>
    </div>
  );
};

export default HomePage;
