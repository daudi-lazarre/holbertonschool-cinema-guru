import React from "react";
import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({title, setTitle}) {
  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon="search" className="search-bar-icon" />
      <input
        className="search-bar"
        type="text"
        value={title}
        onChange={setTitle}
        placeholder="Search"
      />
    </div>
  );
}
