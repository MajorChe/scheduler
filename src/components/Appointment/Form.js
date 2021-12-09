import React from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";
import { useState } from "react";

export default function Form(props) {
  const [student,setStudent] = useState(props.student || "");
  const [Interviewer, setInterviewer] = useState(props.interviewer || null);
  function reset () {
    setStudent('');
    setInterviewer(null)
  }

  const cancel = ()=> {
    props.onCancel()
    reset()
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value = {student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
        interviewers = {props.interviewers}
        value = {Interviewer}
        onChange = {setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {cancel}>Cancel</Button>
          <Button confirm onClick = {props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}
