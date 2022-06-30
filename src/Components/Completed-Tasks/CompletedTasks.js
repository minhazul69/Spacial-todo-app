import React from "react";
import useTasks from "../Hooks/useTasks";

const CompletedTasks = () => {
  const [tasks] = useTasks();
  return (
    <div className="container mx-auto">
      <h3>This Is Compleated Task</h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:px-12 my-8">
        {tasks.map((task, index) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 class="card-title text-red-800">Compleat Task {index + 1}</h2>
              <p>{task.task}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
