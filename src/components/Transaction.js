import React from "react";

export const Transaction = props => {
  return (
    <li className="minus">
      {props.transaction.text} <span>-₹400</span>{" "}
      <button className="delete-btn">x</button>
    </li>
  );
};
