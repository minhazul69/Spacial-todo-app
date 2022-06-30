import React, { useEffect, useRef, useState } from "react";
import useTasks from "../Hooks/useTasks";
import "./ToDo.css";

const ToDo = () => {
  const textRef = useRef("");
  const [tasks] = useTasks();
  const handleTaskAdd = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    console.log(text);
  };

  return (
    <div>
      <div className="container mx-auto todo-container">
        <div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
            <div class="card-body">
              <form onSubmit={handleTaskAdd}>
                <div class="form-control">
                  <h3 className="text-center mb-4 font-bold">Add Your Taxt</h3>
                  <input
                    ref={textRef}
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-primary w-full max-w-xs"
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
          <div className=" grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:px-12 my-8">
            {tasks.map((task, index) => (
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="">
                    <input
                      type="radio"
                      name="radio-1"
                      class="radio radio-primary"
                    />
                  </div>
                  <h2 class="card-title">My Task {index + 1}</h2>
                  {/* <h2
                    style={{
                      textDecoration: strikethrough && "line-through",
                      color: strikethrough ? "red" : "black",
                    }}
                    className="card-title"
                  >
                    {name}
                  </h2> */}
                  <p
                  // style={{
                  //   textDecoration: strikethrough && "line-through",
                  //   color: strikethrough ? "red" : "black",
                  // }}
                  >
                    {task.task}
                  </p>
                  <div className="card-actions justify-between mt-5">
                    <button
                      //   onClick={() => handleDeleteService(task._id)}
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
