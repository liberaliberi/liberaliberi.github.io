import { useReducer, useState } from "react";

import { event } from "../../components/react-ga/handler";

import { question } from "./question";

const reducer = (state: number, action: "NEXT" | "FINISH") => {
  switch (action) {
    case "NEXT": {
      return state + 1;
    }
    case "FINISH": {
      return 1;
    }
    default: {
      return state;
    }
  }
};

export default function Question() {
  const [state, dispatch] = useReducer(reducer, 1);
  const [answer, setAnswer] = useState({});

  const collectData = (questionNumber: number) => {
    setAnswer({
      [questionNumber]: question[questionNumber].answer,
    });
  };

  const onClick = () => {
    if (state !== question.length) {
      collectData(state);
      dispatch("NEXT");
      return;
    }
    event({
      action: 'user_click',
      params: {
       answer 
      }
    })
    dispatch("FINISH");
  };

  return (
    <div>
      <div>
        {state} / {question.length}
      </div>
      <div>{question[state - 1].question}</div>
      <div>
        {question[state - 1].answer.map((el) => (
          <button onClick={onClick}>{el}</button>
        ))}
      </div>
    </div>
  );
}
