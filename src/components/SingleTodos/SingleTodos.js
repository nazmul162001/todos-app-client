import axios from 'axios';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import swal from 'sweetalert';

const SingleTodos = ({ todo, handeDelete }) => {
  const { todoTask, todoDescription, _id, complete } = todo;

  const handleComplited = async () => {
    await axios.put(
      `https://enigmatic-reaches-95964.herokuapp.com/api/user/${_id}`,
      { complete: complete ? false : true }
    );
    complete
      ? swal({
          title: 'Your Task is not Completed',
          text: 'Stay focus on your task.',
          icon: 'success',
          button: 'Aww yiss!',
        })
      : swal({
          title: 'Congratulations! You Completed the Task',
          text: 'Go For the next Task',
          icon: 'success',
          button: 'Aww yiss!',
        });
  };

  // main part
  
  return (
    <div>
      <table class="table w-full my-2">
        <tbody>
          <tr className="border-2 w-full flex flex-col md:flex-row justify-between items-center">
            {/* <td className="py-4 px-1"> {todoTask} </td>
              <td className="py-4 px-1"> {todoDescription} </td> */}
            <td>
              <span
                className={
                  complete
                    ? 'py-4 px-1 text-xl text-gray-500 font-bold line-through'
                    : 'py-4 px-1 text-xl text-gray-500 font-bold'
                }
              >
                {todoTask}
              </span>
              <br />
              <span className="py-4 px-1">{todoDescription}</span>
            </td>
            <div className="todos-action flex justify-end items-center">
              <td className="py-4 px-1">
                <button
                  onClick={() => handleComplited(_id)}
                  class="btn btn-xs btn-success text-sm"
                >
                  Complete <GiCheckMark className="ml-2 text-xl" />{' '}
                </button>
              </td>
              <td className="py-4 px-1">
                <button
                  onClick={() => handeDelete(_id)}
                  class="btn btn-xs btn-error  text-sm"
                >
                  Delete <RiDeleteBin6Line className="ml-2 text-xl" />{' '}
                </button>
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleTodos;
