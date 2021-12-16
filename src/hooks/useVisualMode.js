import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (item, replace = false) => {
    if (replace === true) {
      setMode(item);
    }
    if (item !== mode && replace === false) {
      setMode(item);
      setHistory((prev) => {
        return [...prev, item];
      });
    }
  };
  const back = () => {
    if (history.length <= 1) {
      return;
    }
    history.pop();
    const lastVal = history[history.length - 1];
    setMode(lastVal);
  };
  return { mode, transition, back, history };
}
