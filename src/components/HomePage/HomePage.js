import React from 'react';
import DisplayTodos from '../DisplayTodos/DisplayTodos';
import { BsListTask } from 'react-icons/bs';
import axios from 'axios';
import { toast } from 'react-toastify';

const HomePage = () => {

  const handleAddTodos = async e => {
    e.preventDefault();
    const todoTask = e.target.todoTask.value;
    const todoDescription = e.target.todoDescription.value;
    console.log(todoTask, todoDescription);

    await axios.post('http://localhost:5000/api/user', {
      todoTask,
      todoDescription,
    });
    toast.success('Added Your Todo Task')
    e.target.reset();
  }
  
  return (
    <div className="todos-app w-full h-screen flex justify-center pt-5 px-14 md:px-0">
      <div className="w-full md:w-2/3 lg:w-2/3">
        <h1 className="todo-title text-center text-3xl font-bold text-gray-500 pb-3">
          Add Your Daily Task
        </h1>
        <form onSubmit={handleAddTodos}>
          <input
            type="text"
            name='todoTask'
            placeholder="Task Name"
            class="input input-bordered input-success w-full mb-3"
          />
          <br />
          <textarea
            class="textarea textarea-success w-full"
            name='todoDescription'
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
