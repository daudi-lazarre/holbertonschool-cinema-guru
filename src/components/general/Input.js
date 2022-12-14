import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css";


const Input = ({label, type, className, value, setValue, icon, inputAttributes}) => {
  const [inputValue, setInputValue] = useState(value);
  const setValueFunc = (event) => {
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      <div className="input-above">
        {icon &&
          <FontAwesomeIcon
            icon={icon}
            className="input-icon"
          />
        }
        <label className="input-label">
          {label}
        </label>
      </div>
      <input
        className={className}
        type={type}
        value={inputValue}
        onChange={setValueFunc}
        {...inputAttributes}
        autoComplete="off"
      />
    </div>
  );
}

export default Input;
