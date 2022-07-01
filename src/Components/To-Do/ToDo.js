import React, { useRef, useState } from "react";
import useTasks from "../Hooks/useTasks";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../Share/Spinner/Spinner";

const ToDo = () => {
  const textRef = useRef("");
  const compleatTaskRef = useRef("");
  const [tasks] = useTasks();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTaskAdd = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    setLoading(true);
    fetch("https://boiling-falls-23414.herokuapp.com/task", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          toast.success("Your Task Added SuccessFull");
        } else {
          setLoading(false);
          toast.error("Your Task Added Fail Please Try Again");
        }
      });
    e.target.reset();
  };
  const handleEditTodo = (id) => {
    navigate(`/edit-todo/${id}`);
  };
  const handleCheck = (id) => {
    setLoading(true);
    console.log(id);
    const check = compleatTaskRef.current.checked;
    if (check) {
      fetch(`https://boiling-falls-23414.herokuapp.com/compleat/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Your Task Compleat SuccessFull");
          setLoading(false);
          console.log(data);
        });
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="container mx-auto todo-container">
        <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
            <div className="card-body">
              <form onSubmit={handleTaskAdd}>
                <div className="form-control">
                  <h3 className="text-center mb-4 font-bold">Add Your Text</h3>
                  <input
                    ref={textRef}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:px-12 my-8">
            {tasks.map((task, index) => (
              <>
                {task.status ? (
                  ""
                ) : (
                  <div
                    key={task._id}
                    className="card w-96 bg-base-100 shadow-xl"
                  >
                    <div className="card-body">
                      <div className="">
                        {task.status ? (
                          <h3>Task Compleat</h3>
                        ) : (
                          <input
                            onClick={() => handleCheck(task._id)}
                            ref={compleatTaskRef}
                            type="radio"
                            name="radio-1"
                            className="radio radio-primary"
                          />
                        )}
                      </div>
                      <h2 className="card-title text-green-800 font-bold">
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
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
