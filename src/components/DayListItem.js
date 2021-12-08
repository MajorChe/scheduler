import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

export default function DayListItem(props) {
//   const dayClass = classNames({
//     'day-list__item' : true,
//     '--selected': props.selected,
//     '--full': props.spots === 0
//  });

  let dayClass = 'day-list__item';

  if(props.selected) {
    dayClass += '--selected';
  }

  if(props.spots === 0) {
    dayClass += '--full';
  }

  const formatSpots = () => {
    let spottxt = props.spots + ' spots remaining';
    if(props.spots === 0) {
      spottxt = 'no spots remaining';
    }
    if(props.spots === 1) {
      spottxt = props.spots + ' spot remaining';
    }
    return spottxt;
  }
  
  return (
    <li className={dayClass} onClick = {() => {props.setDay(props.name)}}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}