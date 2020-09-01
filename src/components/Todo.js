import React from "react";

const Item = (props) => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.item.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;