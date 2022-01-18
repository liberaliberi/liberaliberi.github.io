import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { nanoid } from "nanoid";

import { event } from "../../components/react-ga/handler";

import { question, GardenTendencyType } from "./question";
import loadConfig from "next/dist/server/config";

type CounterType = {
  [key: string]: number;
};

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

const countRecuder = (state: CounterType, action: string) => {
  switch (action) {
    case "c": {
      return { ...state, c: state.c + 1 };
    }
    case "g": {
      return { ...state, g: state.g + 1 };
    }
    case "h": {
      return { ...state, h: state.h + 1 };
    }
    case "j": {
      return { ...state, j: state.j + 1 };
    }
    case "k": {
      return { ...state, k: state.k + 1 };
    }
    case "l": {
      return { ...state, l: state.l + 1 };
    }
    case "m": {
      return { ...state, m: state.m + 1 };
    }
    case "t": {
      return { ...state, t: state.t + 1 };
    }
    default: {
      return state;
    }
  }
};

export default function Question() {
  const { push } = useRouter();
  const [state, dispatch] = useReducer(reducer, 0);
  const [data, setData] = useState({});
  const [counter, setCounter] = useReducer(countRecuder, {
    m: 0,
    c: 0,
    g: 0,
    h: 0,
    j: 0,
    k: 0,
    l: 0,
    t: 0,
  });

  const selectUserGardenTendency = () => {
    const a = Object.entries(counter)
      .map(([key, value]) => {
        return value >= 2 ? key : "";
      })
      .filter((k) => k !== "")
      .join("");

    return a;
  };

  const collectData = (questionNumber: number, clickElementIndex: string) => {
    return setData((origin) => ({
      ...origin,
      [`Q${questionNumber}`]: clickElementIndex,
    }));
  };

  const onFinish = () => {
    event({
      action: nanoid(),
      params: {
        data,
      },
    });
    const userGardenTendency = selectUserGardenTendency();

    push({ pathname: "/result", query: { a: userGardenTendency } });
  };

  const onClick = (questionNumber: number, clickElementIndex: string) => {
    event({
      action: `Question_${questionNumber}`,
      params: { clickElementIndex },
    });
    collectData(questionNumber, clickElementIndex);
    setCounter(clickElementIndex);
    dispatch("NEXT");
  };

  useEffect(() => {
    if (state === question.length) {
      setTimeout(onFinish, 3000);
    }
    () => dispatch("FINISH");
  }, [dispatch, state, question]);

  return (
    <div>
      {state !== question.length ? (
        <>
          <div>
            {state + 1} / {question.length}
          </div>
          <div>{question[state]?.question}</div>
          <div id="answer-list">
            {question[state]?.answer.map((el, idx) => (
              <button
                key={typeof el === "string" ? el : el.choice}
                onClick={() =>
                  onClick(
                    state + 1,
                    typeof el === "string" ? `${idx + 1}` : el.tendency
                  )
                }
              >
                {typeof el === "string" ? el : el.choice}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>loading...</>
      )}
    </div>
  );
}
