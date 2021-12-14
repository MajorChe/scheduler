import React, {Fragment} from "react";
import DayList from "./DayList";
import "components/Application.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Appointment"
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";


export default function Application(props) {
  
  const [state, setState] = useState({
    day : "Monday",
    days : [],
    appointments : {},
    interviewers : {}
  })

  const bookInterview = (id,interview) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
          .then(() => setState({... state, appointments}))
  }

  const deleteInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`)
  }
  
  const setDay = day => setState({...state,day});

  useEffect(()=> {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ])
    .then((all) => {
      setState((prev) => ({... prev , days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  },[])

  const dailyAppointments = getAppointmentsForDay(state,state.day);
  const dailyInterviewers = getInterviewersForDay(state,state.day);

  const appointmentlist = dailyAppointments.map((appointment) => {
    const interview = getInterview (state, appointment.interview)
    return <Appointment
    key = {appointment.id} {... appointment}
    interview = {interview}
    interviewers = {dailyInterviewers}
    bookInterview = {bookInterview}
    deleteInterview = {deleteInterview}
    />
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days= {state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {appointmentlist}
      </section>
    </main>
  );
}
