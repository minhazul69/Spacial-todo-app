import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  return [tasks];
};

export default useTasks;
