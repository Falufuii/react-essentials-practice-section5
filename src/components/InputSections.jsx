import React from "react";

export default function InputSection({ inputLabel, onChange, title }) {
  function handlerInputChange(event) {
    onChange(event.target.value, title);
  }

  return (
    <div>
      <label>{inputLabel}</label>
      <input type="number" onChange={handlerInputChange} />
    </div>
  );
}
