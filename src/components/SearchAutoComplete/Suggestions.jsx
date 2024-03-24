import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length > 0
        ? data.map((item, index) => <li key={index} onClick={handleClick}>{item}</li>)
        : null}
    </ul>
  );
};

export default Suggestions;
