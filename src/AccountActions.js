import React, { useState, useEffect } from "react";
import { store, withdraw, deposit } from "./Store";
import './Account.css'

const AccountActions = () => {
  const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   store.subscribe(() => {
  //     var state = store.getState();
  //     setAmount(state.amount);
  //   });
  // },[]);

  let handleChange = (e) => {
    setAmount(e.target.value);
    console.log("value is" + e);
  };

  let withdraw = () => {
    console.log("value is" + amount);
    store.dispatch({ type: "WITHDRAW", selectedamount: parseInt(amount) });
  };

  let deposit = () => {
    store.dispatch({ type: "DEPOSIT",selectedamount:parseInt(amount) });
  };

  return (
    <div class="hhh">
      <h2>AccountActions</h2>
      <label for="amount">Amount:</label>
      <input type="text" onChange={handleChange} value={amount}></input>
      <br />
      <br />
      <button onClick={withdraw}>WITHDRAW</button>
      <button onClick={deposit}>DEPOSIT</button>
    </div>
  );
};

export default AccountActions;
