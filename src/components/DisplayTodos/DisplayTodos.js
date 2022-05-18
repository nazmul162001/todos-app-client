import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DisplayTodos = () => {
  return (
    <div className="display-todos">
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className='border-2'>
              <td className='py-4 px-1'>Todo Task</td>
              <td className='py-4 px-1'>This is my todos description.</td>
              <div className="todos-action flex justify-center items-center">
                <td className='py-4 px-1'>
                  <button class="btn btn-xs btn-success text-sm">Complete <GiCheckMark className='ml-2 text-xl' /> </button>
                </td>
                <td className='py-4 px-1'>
                  <button class="btn btn-xs btn-error  text-sm">Delete <RiDeleteBin6Line className='ml-2 text-xl' /> </button>
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayTodos;
