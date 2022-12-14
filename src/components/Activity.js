import React from "react";
import "./components.css";

export default function Activity({activity}) {
  return (
    <li className="activity-item">
      <p>
        <b>{activity.user.name}</b> {activity.action} <b> {activity.subject.name}</b> to
        <b> {activity.object.name}</b> - {activity.created_at}
      </p>
    </li>
  );  
}
