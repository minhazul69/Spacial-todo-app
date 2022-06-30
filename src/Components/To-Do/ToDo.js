import React, { useRef } from "react";
import useTasks from "../Hooks/useTasks";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const textRef = useRef("");
  const compleatTaskRef = useRef("");
  const [tasks] = useTasks();
  const navigate = useNavigate();
  const handleTaskAdd = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    fetch("http://localhost:5000/task", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("Product Added SuccessFull");
      });
    e.target.reset();
  };
  const handleEditTodo = (id) => {
    navigate(`/edit-todo/${id}`);
  };
  const handleCheck = (id) => {
    console.log(id);
    const check = compleatTaskRef.current.checked;
    if (check) {
      fetch(`http://localhost:5000/compleat/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    console.log("hello");
  };

  return (
    <div>
      <div className="container mx-auto todo-container">
        <div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
            <div class="card-body">
              <form onSubmit={handleTaskAdd}>
                <div class="form-control">
                  <h3 className="text-center mb-4 font-bold">Add Your Text</h3>
                  <input
                    ref={textRef}
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-primary w-full max-w-xs"
                    required
                  />
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:px-12 my-8">
            {tasks.map((task, index) => (
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="">
                    <input
                      onClick={() => handleCheck(task._id)}
                      ref={compleatTaskRef}
                      type="radio"
                      name="radio-1"
                      class="radio radio-primary"
                    />
                  </div>
                  <h2 class="card-title text-green-800 font-bold">
                    My Task {index + 1}
                  </h2>

                  <p>{task.text}</p>
                  <div className="card-actions justify-between mt-5">
                    <button
                      onClick={() => handleEditTodo(task._id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
