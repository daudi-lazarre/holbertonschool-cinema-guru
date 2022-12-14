import React "react";
import "./general.css";
import { useState } from "react";


export default function SelectInput({label, options, className, value}) {
  return (
    <div className="input-container">
      <div className="input-above">
        <label className="input-label">
          {label}
        </label>
      </div>
      <select
        className={className}
        value={value}
        onChange={setValue}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
