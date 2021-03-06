import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames({
    'day-list__item' : true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
 });

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
    <li className={dayClass} onClick = {() => {props.setDay(props.name)}} selected= {props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}