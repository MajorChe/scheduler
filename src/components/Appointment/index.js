import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import Status from "./Status";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const ERROR = 'ERROR';
  const CONFIRM = 'CONFIRM';
  const SAVING = 'SAVING';
  const {mode,transition,back} = useVisualMode(props.interview ? SHOW : EMPTY);
  const save = (name,interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview (props.id,interview);
    transition(SHOW);
  }

  return (
    <article className="appointment">
      <Header time = {props.time}/>
      {mode === EMPTY &&
      <Empty onAdd = {() => transition(CREATE)}/>}
      {mode === SAVING &&
      <Status />}
      {mode === SHOW &&
      <Show student = {props.interview.student} interviewer = {props.interview.interviewer}/>}
      {mode === CREATE &&
      <Form  onCancel = {back} interviewers = {props.interviewers} onSave = {save}/>}
      </article>
    
  );
}