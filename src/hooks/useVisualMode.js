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
    const history_copy = [...history];
    if (history_copy.length <= 1) {
      setMode(history_copy[0]);
    }
    history_copy.pop();
    setHistory(history_copy);
    setMode(history_copy[history_copy.length - 1]);
  };
  return { mode, transition, back, history };
}
