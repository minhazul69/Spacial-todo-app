import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useTaskDetails from "../Hooks/useTaskDetails";
const EditTodo = () => {
  const editTextRef = useRef("");
  const { id } = useParams();
  const [taskDetails] = useTaskDetails(id);
  const handleEditText = (e) => {
    e.preventDefault();
    const text = editTextRef.current.value;
    // const updateUser = { quantity: newQuantity };
    const url = `http://localhost:5000/edit-text/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          //   toast.success("Delivered Product SuccessFull");
        }
      });
    console.log(text);
  };
  return (
    <div className="container mx-auto">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
        <div class="card-body">
          <form onSubmit={handleEditText}>
            <div class="form-control">
              <h3 className="text-center mb-4 font-bold">Edit Your Text</h3>
              <textarea
                ref={editTextRef}
                placeholder={taskDetails[0]?.text}
                class="textarea textarea-primary"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Edit Text
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
