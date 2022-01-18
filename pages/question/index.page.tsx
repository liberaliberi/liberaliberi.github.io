import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { nanoid } from "nanoid";

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

  const collectData = (questionNumber: number, clickElementIndex: number) => {
    setAnswer((origin) => ({
      ...origin,
      [`Q${questionNumber}`]: clickElementIndex,
    }));
  };

  const onFinish = (questionNumber: number, clickElementIndex: number) => {
    console.log(answer);
    event({
      action: nanoid(),
      params: {
        ...answer,
        [`Q${questionNumber}`]: clickElementIndex,
      },
    });

    push("/result");
  };

  const onClick = (questionNumber: number, clickElementIndex: number) => {
    event({
      action: `Question_${questionNumber}`,
      params: { clickElementIndex },
    });
    collectData(questionNumber, clickElementIndex);
    dispatch("NEXT");
  };

  useEffect(() => {
    () => dispatch("FINISH");
  }, [dispatch, state]);

  return (
    <div>
      <div>
        {state} / {question.length}
      </div>
      <div>{question[state - 1].question}</div>
      <div id="answer-list">
        {question[state - 1].answer.map((el, idx) => (
          <button
            key={el}
            onClick={() =>
              state !== question.length
                ? onClick(state, idx + 1)
                : onFinish(state, idx + 1)
            }
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
