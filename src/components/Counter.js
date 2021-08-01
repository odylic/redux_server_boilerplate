import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCounter } from "../store/counterSlice";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

export default function counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);

  const addOne = () => {
    dispatch(increment());
  };

  const minusOne = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <header className="App-header">
        Redux Counter
        <h1>{count} </h1>
        <div style={containerStyle}>
          <button type="button" onClick={minusOne} style={buttonStyle}>
            -
          </button>
          <button type="button" onClick={addOne} style={buttonStyle}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}
