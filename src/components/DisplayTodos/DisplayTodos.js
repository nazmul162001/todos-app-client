import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import SingleTodos from '../SingleTodos/SingleTodos';

const DisplayTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/user')
      .then((res) => setTodos(res.data));
  }, [todos]);
  

  const handeDelete = async (id)=>{
     
    swal({
      title: "Are you sure?",
      text: "You want to delete this todos?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then( async(willDelete)  => {
      if (willDelete) {
        swal("Successfully deleted your todos", {
          icon: "success",
        });
        await axios.delete(`http://localhost:5000/api/user/${id}`)
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  }
  
  
  
  return (
    <div className="display-todos">
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className='flex justify-between px-5'>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
          {
            todos.map(todo => <SingleTodos 
              key={todo._id}
              todo={todo}
              handeDelete={handeDelete}
            />)
          }
      </div>
    </div>
  );
};

export default DisplayTodos;
