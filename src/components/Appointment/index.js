import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const EDIT = 'EDIT'
  const CREATE = 'CREATE';
  const CONFIRM = 'CONFIRM';
  const SAVING = 'SAVING';
  const DELETE = 'DELETE';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE'
  const {mode,transition,back} = useVisualMode(props.interview ? SHOW : EMPTY);
  const save = (name,interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    if (interview.student === '' || interview.interviewer === null) {
      return transition(ERROR_SAVE,true)
    }
    transition(SAVING);

    props.bookInterview (props.id,interview)
    .then(()=> transition(SHOW))
    .catch(() => transition(ERROR_SAVE,true))
  };

  const edit = () => {
    transition(EDIT);
  }

  const remove = () => {
    transition(CONFIRM);
  }

  const confirmDelete = () => {
    transition(DELETE)
    props.deleteInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE,true))
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
      {mode === CREATE &&
      <Form  interviewers = {props.interviewers} onSave = {save} onCancel = {back}/>}
      {mode === SHOW &&
      <Show student = {props.interview.student} interviewer = {props.interview.interviewer} onDelete = {remove} onEdit = {edit}/>}
      {mode === EDIT &&
      <Form student = {props.interview.student} interviewer = {props.interview.interviewer.id} interviewers = {props.interviewers} onSave = {save} onCancel = {back}/>}
      {mode === ERROR_SAVE &&
      <Error message = 'Could not save appointment' onClose = {back} />}
      {mode === ERROR_DELETE &&
      <Error message = 'Could not delete appointment' onClose = {back} />}
      </article>
    
  );
}