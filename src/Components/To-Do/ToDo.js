import React, { useRef } from "react";
import "./ToDo.css";

const ToDo = () => {
  const textRef = useRef("");
  const handleTaskAdd = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    console.log(text);
  };
  return (
    <div>
      <div className="container todo-container">
        <div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
            <div class="card-body">
              <form onSubmit={handleTaskAdd}>
                <div class="form-control">
                  <h3 className="text-center mb-4 font-bold">Add Your Taxt</h3>
                  {/* <textarea
                    ref={textRef}
                    class="textarea textarea-primary"
                    placeholder="Bio"
                  ></textarea> */}
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
        </div>
      </div>
    </div>
  );
};

export default ToDo;
