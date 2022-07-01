import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://boiling-falls-23414.herokuapp.com/all-tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  return [tasks];
};

export default useTasks;
