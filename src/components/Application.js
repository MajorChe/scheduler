import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import "./Appointment"
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";


export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  } = useApplicationData();

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
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentlist}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
