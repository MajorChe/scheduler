import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

export default function Appointments(props) {
  return (
    <article className="appointment">
      <Header time = {props.time}/>
      {!props.interview ? <Empty/> : <Show interviewer = {props.interview.interviewer}/>}
    </article>
    
  );
}