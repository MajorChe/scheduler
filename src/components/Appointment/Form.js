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
  const save = ()=> {
    props.onSave(student,Interviewer)
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
          {/* student name is created */}
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value = {student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        {/* Interviewer is selcted using the interviewer component */}
        <InterviewerList
        interviewers = {props.interviewers}
        value = {Interviewer}
        onChange = {setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {cancel}>Cancel</Button>
          <Button confirm onClick = {save}>Save</Button>
        </section>
      </section>
    </main>
  );
}
