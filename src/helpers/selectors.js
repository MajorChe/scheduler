export function getAppointmentsForDay(state, day) {
  const getappointments = state.days.filter(item => item.name === day) // [1,2,3]
  if(getappointments.length === 0){
    return [];
  }
  const arr = [];
 for(let i of getappointments[0].appointments) {
      arr.push(state.appointments[i])
     }
 return arr;
}