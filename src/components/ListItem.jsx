import React from "react";
import Item from "./Item";

function ListItem({ items, actionName, handleAddItem }) {
  console.log(items);
  const handleAdd = (data, action) => {
    handleAddItem(data, action);
  };

  if (actionName === "COMPLETE") {
    return (
      <div className="list-item">
        <Item items={items} actionName={actionName} handleAdd={handleAdd} />
        <Item items={''} actionName={""} handleAdd={handleAdd} />
      </div>
    );
  }

  return <Item actionName={actionName} handleAdd={handleAdd} />;
}

export default ListItem;
