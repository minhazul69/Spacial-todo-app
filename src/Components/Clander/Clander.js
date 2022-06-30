import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import calenderImg from "../../image/calendar-gif.gif";
const Clander = () => {
  const [selected, setSelected] = useState(new Date());
  const css = `.my-today { 
        font-weight: bold;
        font-size: 180%; 
        color: red;
      }`;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={calenderImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:px-24">
            <style>{css}</style>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                today: "my-today",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clander;
