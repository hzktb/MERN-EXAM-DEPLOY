import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
  const { buttonName, id, onDeleteProp } = props;

  const handleDelete = () => {
    axios
      .delete("http://localhost:8000/api/pets/delete/" + id)
      .then((res) => onDeleteProp());
  };

  return (
    <button onClick={handleDelete} className="delete">
      {buttonName}
    </button>
  );
};

export default DeleteButton;
