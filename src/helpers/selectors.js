export function getAppointmentsForDay(state, day) {
  const getappointments = state.days.filter(item => item.name === day)
  if(getappointments.length === 0){
    return [];
  }
  const arr = [];
 for(let i of getappointments[0].appointments) {
      arr.push(state.appointments[i])  //take an appointment id from get appintments and fetch appointments corresponding to that id
    }
 return arr;
}

export function getInterview(state,interview) {
  if(!interview) {
    return null;
  }
  const interviewerDetail = state.interviewers[interview.interviewer]
  return {"student" : interview.student, "interviewer" : interviewerDetail}
}

export function getInterviewersForDay(state, day) {
  const getInterviewers = state.days.filter(item => item.name === day)
  if(getInterviewers.length === 0){
    return [];
  }
  const arr = [];
 for(let i of getInterviewers[0].interviewers) {
      arr.push(state.interviewers[i])
     }
 return arr;
}