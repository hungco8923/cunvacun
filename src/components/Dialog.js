import React from "react";

let dialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end",
};

export default function Dialog(props) {
  const handleClose = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    props.onClose();
  };

  if (!props.isOpen) {
    return null; // Return null if dialog is not open
  }

  return (
    <div className="dialog-overlay" onClick={handleClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <button style={dialogCloseButtonStyles} onClick={handleClose}>
          x
        </button>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
