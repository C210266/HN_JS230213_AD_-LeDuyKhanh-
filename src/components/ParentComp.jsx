import React, { useState } from "react";
import ListItem from "./ListItem";
import BtnSearch from "./BtnSearch";
import BtnChangeColor from "./BtnChangeColor";

function ParentComp() {
  const [items, setItems] = useState("");
  const [actionName, setActionName] = useState("");
  const handleAddItem = (item, action) => {
    setItems({ ...items, item });
    setActionName(action);
  };
  console.log(items);

  return (
    <div className="container1" id="container">
      <div className="heading">
        <h2>Reviews TA Béc Cọp!!!</h2>
        <BtnChangeColor />
      </div>

      <BtnSearch />

      <ListItem
        items={items}
        actionName={actionName}
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default ParentComp;
