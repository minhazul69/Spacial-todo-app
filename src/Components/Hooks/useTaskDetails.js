import { useState } from "react";

const useTaskDetails = (id) => {
  const [taskDetails, setTaskDetails] = useState({});
  fetch(`https://boiling-falls-23414.herokuapp.com/task-details/${id}`)
    .then((res) => res.json())
    .then((data) => setTaskDetails(data));
  return [taskDetails];
};

export default useTaskDetails;
