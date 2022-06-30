import { useState } from "react";

const useTaskDetails = (id) => {
  const [taskDetails, setTaskDetails] = useState({});
  fetch(`http://localhost:5000/task-details/${id}`)
    .then((res) => res.json())
    .then((data) => setTaskDetails(data));
  return [taskDetails];
};

export default useTaskDetails;
