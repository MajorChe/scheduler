import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const ERROR = 'ERROR';
  const CONFIRM = 'CONFIRM';
  const SAVING = 'SAVING';
  const DELETE = 'DELETE'
  const {mode,transition,back} = useVisualMode(props.interview ? SHOW : EMPTY);
  const save = (name,interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview (props.id,interview)
    .then(()=> transition(SHOW))
  };

  const remove = () => {
    transition(CONFIRM);
  }

  const confirmDelete = () => {
    transition(DELETE)
    props.deleteInterview(props.id)
    .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
      <Header time = {props.time}/>
      {mode === EMPTY &&
      <Empty onAdd = {() => transition(CREATE)}/>}
      {mode === CONFIRM &&
      <Confirm message = 'Are you sure to delete?' onConfirm = {confirmDelete} onCancel = {back}/>}
      {mode === SAVING &&
      <Status message = 'Saving'/>}
      {mode === DELETE &&
      <Status message = 'Deleting'/>}
      {mode === SHOW &&
      <Show student = {props.interview.student} interviewer = {props.interview.interviewer} onDelete = {remove}/>}
      {mode === CREATE &&
      <Form  interviewers = {props.interviewers} onSave = {save} onCancel = {back}/>}
      </article>
    
  );
}