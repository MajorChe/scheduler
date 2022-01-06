import { useState, useEffect} from "react";
import axios from "axios";
import { getAvailableSpots } from "helpers/selectors";
export default function useApplicationData () {
  const [state, setState] = useState({
    day : "Monday",
    days : [],
    appointments : {},
    interviewers : {}
  })

  useEffect(()=> {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
    .then((all) => {
      setState((prev) => ({...prev , days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  },[])

  const setDay = day => setState({...state,day});

  const bookInterview = (id,interview) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const availableSpots = getAvailableSpots(appointments,state.days,state.day)

    const day_id=state.days.findIndex(item=>item.name===state.day);

    const dayObj = {
      ...state.days[day_id],
      spots: availableSpots
    }

    const days = [
      ...state.days
    ]

    days[day_id] = dayObj

    return axios.put(`/api/appointments/${id}`, appointment)
          .then(() => setState({...state, appointments, days}))
  };

  const deleteInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const availableSpots = getAvailableSpots(appointments,state.days,state.day)

    const day_id=state.days.findIndex(item=>item.name===state.day);

    const dayObj = {
      ...state.days[day_id],
      spots: availableSpots
    }

    const days = [
      ...state.days
    ]

    days[day_id] = dayObj

    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(()=> setState({...state,appointments,days}))
  };

  return {state, setDay, bookInterview, deleteInterview}
}