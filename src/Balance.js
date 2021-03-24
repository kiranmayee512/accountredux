import React, { useState, useEffect } from "react";
import { store } from "./Store";


const Balance = () => {
  const [count, setCount] = useState(0);
  const { getState, dispatch, subscribe } = store;
  const [storeState, setStoreState] = useState(getState());

  useEffect(() => 
  store.subscribe(() => 
  setStoreState(getState()),
  
 []));

  return [storeState, dispatch];

  //   useEffect(() => {
  //     store.subscribe(() => {
  //       var state = store.getState();
  //       setCount(state.count);
  //     });
  //   }, []);

  return 
    <div>
      <h1>BALANCE</h1>
      <h3>₹{count}</h3>
    </div>

}

export default Balance;