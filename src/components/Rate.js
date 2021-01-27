import React from "react";

const Rate = ({ rating }) => {
  let Stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      Stars.push(
        <span className="rating" style={{ cursor: "pointer" }}>
          ★
        </span>
      );
    } else {
      Stars.push(
        <span className="rating" style={{ cursor: "pointer" }}>
          ☆
        </span>
      );
    }
  }
  return Stars;
};

export default Rate;
