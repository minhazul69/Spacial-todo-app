import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useTaskDetails from "../Hooks/useTaskDetails";
import toast from "react-hot-toast";
import Spinner from "../Share/Spinner/Spinner";
const EditTodo = () => {
  const editTextRef = useRef("");
  const { id } = useParams();
  const [taskDetails] = useTaskDetails(id);
  const text = taskDetails[0]?.text;
  const handleEditText = (e) => {
    e.preventDefault();
    const text = editTextRef.current.value;
    console.log(text);
    // const updateUser = { quantity: newQuantity };
    const url = `https://boiling-falls-23414.herokuapp.com/edit-text/${id}`;
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

          e.target.reset();
          toast.success("Your Task Edit SuccessFull");
        }
      });
    console.log(text);
  };
  if (!text) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">
        <div className="card-body">
          <form onSubmit={handleEditText}>
            <div className="form-control">
              <h3 className="text-center mb-4 font-bold">Edit Your Text</h3>
              <textarea
                ref={editTextRef}
                defaultValue={text}
                className="textarea textarea-primary"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
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
