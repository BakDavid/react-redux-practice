import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, log} from "./actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(log())}>Logged status change</button>

      {isLogged ? <h3>Only logged in user can see this</h3> : ''}
    </div>
  );
}

export default App;
