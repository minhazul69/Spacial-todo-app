import React, { useEffect, useState } from "react";

const CompletedTasks = () => {
  const [compleatTasks, setCompleatTasks] = useState([]);
  useEffect(() => {
    fetch("https://boiling-falls-23414.herokuapp.com/compleat")
      .then((res) => res.json())
      .then((data) => setCompleatTasks(data));
  }, [compleatTasks]);
  return (
    <div className="container mx-auto">
      {compleatTasks.length === 0 ? (
        <h2 className="font-bold text-red-800 fs-2 text-center my-20 text-4xl">
          You Have No Compleat Task
        </h2>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:px-12 my-8">
          {compleatTasks.map((task, index) => (
            <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-red-800">
                  Compleat Task {index + 1}
                </h2>
                <p>{task.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedTasks;
