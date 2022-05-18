import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SingleTodos = ({ todo, handeDelete }) => {
  const { todoTask, todoDescription, _id } = todo;


  return (
    <div>
      <table class="table w-full my-2">
        <tbody>
          <tr className="border-2 w-full">
              {/* <td className="py-4 px-1"> {todoTask} </td>
              <td className="py-4 px-1"> {todoDescription} </td> */}
              <td>
                <span className="py-4 px-1 text-xl text-gray-500 font-bold">{todoTask}</span>
                <br />
                <span className="py-4 px-1">{todoDescription}</span>
              </td>
            <div className="todos-action flex justify-end items-center">
              <td className="py-4 px-1">
                <button class="btn btn-xs btn-success text-sm">
                  Complete <GiCheckMark className="ml-2 text-xl" />{' '}
                </button>
              </td>
              <td className="py-4 px-1">
                <button onClick={()=> handeDelete(_id)} class="btn btn-xs btn-error  text-sm">
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
