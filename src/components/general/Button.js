import React from "react";
import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({label, className, type, icon, onClick}) {
  return (
    <div className="button-container">
      <button
        className={className}
        onClick={onClick}
        type={type}
      >
        {icon &&
          <FontAwesomeIcon
            icon={icon}
            className="button-icon"
          />
        }
        <span className="button-label">
          {label}
        </span>
      </button>
    </div>
  )
}
