import React, { useState } from "react";
import "./App.css";
import data from "./Data/Data.json";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="app">
      <div
        className="app__input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      >
        <input type="text" placeholder="search" />
      </div>
      {data
        .filter((val) => {
          if (input === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(input.toLowerCase()) ||
            val.last_name.toLowerCase().includes(input.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <h3>
                {item.first_name} {item.last_name}
              </h3>

              <p>{item.email}</p>
              {item.gender}
            </div>
          );
        })}
    </div>
  );
};

export default App;
