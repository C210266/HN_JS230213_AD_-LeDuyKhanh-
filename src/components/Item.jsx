import React, { useState } from "react";

function Item({ items, actionName, handleAdd }) {
  console.log(items);
  const [formData, setFormData] = useState({ content: "" });
  const [count, setCount] = useState(200);

  const handleChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
    setCount(count - 1);
  };

  //   const handleKeyDown = (e) => {
  //     if (e.keyCode === 8) {
  //       setCount(count + 1);
  //       console.log(count + 1);
  //     }
  //   };

  const handleSubmitAdd = () => {
    handleAdd(formData, "COMPLETE");
  };

  const currentDate = new Date(); // Get current date
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="item">
      <textarea
        className={
          actionName === "COMPLETE"
            ? "item-area item-blue"
            : "item-area item-green"
        }
        cols="20"
        rows="8"
        value={items ? items.item.content : null}
        placeholder="Type review here..."
        onChange={handleChange}
      ></textarea>
      <div className="item-btn">
        {actionName === "COMPLETE" ? (
          formattedDate
        ) : (
          <div className="item-left">{count} </div>
        )}
        {actionName === "COMPLETE" ? (
          <i class="fa-solid fa-trash"></i>
        ) : (
          <div className="item-right" onClick={handleSubmitAdd}>
            Publish
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
