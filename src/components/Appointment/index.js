import React from "react";
import "components/Appointment/styles.scss";

export default function Appointments(props) {
  return (
    <article className="appointment">
      {!props.time && "No Appointments"}
      {props.time && "Appointment at "}{props.time}
    </article>
  );
}