import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); //mode = first
  const transition = (item,replace = false) => {
    if (replace === true) {
      setMode(item)
    }
    if (item != mode && replace === false) { //if first === second
      setMode(item); //second
      setHistory([...history, item]); // first second
    }
  };
  const back = () => {
    if(history.length <= 1) {  //history [first,second] mode first
      return
    }
      history.pop();
      const lastVal = history[history.length - 1]; 
      setMode(lastVal);
  };
  return { mode, transition, back };
}
