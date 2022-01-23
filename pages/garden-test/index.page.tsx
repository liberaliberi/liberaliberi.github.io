import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { nanoid } from "nanoid";

import { event } from "../../components/react-ga/handler";

import { question } from "./question";
import { ChoiceButton } from "../../components/button/choice";
import { QuestionNumber } from "../../components/question-number";
import styles from "../../styles/question.module.scss";
import { Logo } from "../../components/logo";

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
    // 이순서 유지
    m: 0,
    c: 0,
    j: 0,
    t: 0,
    g: 0,
    h: 0,
    k: 0,
    l: 0,
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

    push({ pathname: "/result", query: { tendency: userGardenTendency } });
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
      onFinish();
    }
    () => dispatch("FINISH");
  }, [dispatch, state, question]);

  return (
    <div className={styles.gardenTest}>
      {/* {state !== question.length ? ( */}
      <>
        <div className={styles.gardenTest__step}>
          {/* {state + 1} / {question.length} */}
          <QuestionNumber currentNumber={state + 1} />
        </div>
        <div className={styles.gardenTest__question}>
          {question[state]?.question}
        </div>
        <div className={styles.gardenTest__btn}>
          {question[state]?.answer.map((el, idx) => (
            <ChoiceButton
              key={typeof el === "string" ? el : el.choice}
              onClick={() =>
                onClick(
                  state + 1,
                  typeof el === "string" ? `${idx + 1}` : el.tendency
                )
              }
            >
              {typeof el === "string" ? el : el.choice}
            </ChoiceButton>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4.7rem",
          }}
        >
          <Logo />
        </div>
      </>
      ){/* : ( */}
      {/* <>loading...</> */}
      {/* )} */}
    </div>
  );
}
