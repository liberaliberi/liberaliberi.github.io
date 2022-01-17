import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";

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
  const { push } = useRouter();
  const [state, dispatch] = useReducer(reducer, 1);
  const [answer, setAnswer] = useState({});

  const collectData = (questionNumber: number) => {
    setAnswer((origin) => ({
      ...origin,
      [questionNumber]: question[questionNumber].answer,
    }));
  };

  const onChooseQuestion = () => {
    collectData(state);
    dispatch("NEXT");
  };

  const onFinish = () => {
    event({
      action: "user_answer",
      params: {
        event_label: "answer",
        value: answer,
      },
    });
    push("/result");
  };

  const onClick = () => {
    if (state !== question.length) {
      onChooseQuestion();
      return;
    }
    onFinish();
  };

  useEffect(() => {
    () => dispatch("FINISH");
  }, [dispatch]);

  return (
    <div>
      <div>
        {state} / {question.length}
      </div>
      <div>{question[state - 1].question}</div>
      <div>
        {question[state - 1].answer.map((el) => (
          <button key={`Q${state}`} onClick={onClick}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
