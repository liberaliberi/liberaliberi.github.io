export type GardenTendencyType = "m" | "c" | "t" | "j" | "k" | "l" | "g" | "h";

const m: GardenTendencyType = "m";
const c: GardenTendencyType = "c";
const t: GardenTendencyType = "t";
const j: GardenTendencyType = "j";
const k: GardenTendencyType = "k";
const l: GardenTendencyType = "l";
const g: GardenTendencyType = "g";
const h: GardenTendencyType = "h";

export const question = [
  {
    question: "나만의 정원 딸린 멋진 집을 꿈꾸는 당신, 당신의 나이는?",
    answer: ["10대", "20·30 대", "40·50 대", "60대 이상"],
  },
  {
    question: "나는 그 집에서 누구와 살고 있을까?",
    answer: [
      "나 혼자",
      "반려동물과 함께",
      "부부와 함께",
      "부모님과 함께",
      "아이들이 있는 나의 가족과 함께",
    ],
  },
  {
    question: "비온 뒤 밖으로 나가보니, 잡초가 무성하게 자랐다.",
    answer: [
      { choice: "내 정원에 잡초라니.. 당장 뽑아 정리한다.", tendency: m },
      { choice: "원래 자연은 자연스럽게 두는거지.. 일단 둔다.", tendency: c },
    ],
  },
  {
    question: "아침부터 시끌시끌, 옆집에 새로운 이웃이 이사를 온 것 같은데?",
    answer: [
      {
        choice: "흠.. 이 근방엔 우리집밖에 없어서 좋았는데.. 조금 아쉽다.",
        tendency: m,
      },
      { choice: "와! 새로운 이웃이라니! 너무 설렌다.", tendency: c },
    ],
  },
  {
    question: "산책 중에 갑자기 비가 온다. 음, 우산이 없네",
    answer: [
      {
        choice: "비가 오니까 운치도 있는데 근처 카페서 그칠때까지 있어야지",
        tendency: c,
      },
      { choice: "집가서 할 일이 많아! 전력질주로 집에 간다.", tendency: m },
    ],
  },
  {
    question: "나만의 공간을 위한 인테리어는?",
    answer: [
      {
        choice: "물건은 꼭 필요한 것만! 없는 것이 최고의 인테리어다.",
        tendency: j,
      },
      {
        choice: "세상의 모든 물건은 우리집으로 오라! 뭐든 과해서 나쁠게 없다.",
        tendency: t,
      },
    ],
  },
  {
    question:
      "저녁식사에 초대한 친구가 집에 어울릴 것 같다며 그림 하나를 선물했는데.. 오 너무 찰떡인걸?",
    answer: [
      { choice: "파스텔 톤의 따뜻한 느낌의 그림", tendency: j },
      { choice: "원색의 포인트가 되는 느낌의 그림", tendency: t },
    ],
  },
  {
    question: "꿈꾸던 집을 마련한 당신, 모두가 당신을 부러워하며 하는 말은?",
    answer: [
      {
        choice: "맨날 놀더니, 언제 이렇게 돈을 모아서 집을 산거야?",
        tendency: t,
      },
      { choice: "그렇게 차근차근 열심히 모으더니, 인정!", tendency: j },
    ],
  },
  {
    question:
      "기분전환을 위해 정원의 느낌을 바꾸고 싶은 당신, 새로운 식물을 사려는데",
    answer: [
      { choice: "이국적인 느낌을 낼 수 있는 식물을 사볼까?", tendency: g },
      { choice: "사계절을 느낄수 있는 나무와 꽃을 사야겠어!", tendency: h },
    ],
  },
  {
    question:
      "살랑이는 바람, 따뜻한 햇빛.. 당신은 낮잠을 즐기고 있다. 당신이 누워있는 곳은?",
    answer: [
      { choice: "새가 지저귀는 소리가 들리는 평상 위", tendency: g },
      { choice: "핑크뮬리가 가득한 공원의 돗자리 위", tendency: h },
    ],
  },
  {
    question: "밤사이 기분좋은 꿈을 꾼 당신, 꿈 속에서 당신은",
    answer: [
      { choice: "익숙하고 편하고 추억이 가득한 장소를 다녀왔다", tendency: h },
      { choice: "새롭고 신기하고 낯선 장소를 다녀왔다", tendency: g },
    ],
  },
  {
    question:
      "갑자기 회사에 일이 생겨 휴가를 쓰게된 당신, 오늘은 꼭 이걸 해야겠다고 결심하는데..",
    answer: [
      { choice: "친구들아 모여라! 파티를 계획한다.", tendency: k },
      {
        choice: "일상에서 탈출! 혼자만의 당일치기 여행을 떠난다.",
        tendency: l,
      },
    ],
  },
  {
    question: "화창한 주말, 소중한 주말을 위해 당신은 정원에서,",
    answer: [
      { choice: "가족과 함께 바베큐파티를 한다.", tendency: k },
      { choice: "자연을 느끼고 조용히 휴식을 하며 독서를 한다.", tendency: l },
    ],
  },
  {
    question: "요 몇일 스트레스를 받았더니 머리가 아프네, ",
    answer: [
      {
        choice: "아로마 테라피와 스트레칭으로 심신의 이완을 해야지.",
        tendency: l,
      },
      { choice: "맛있는 걸 먹어서 즉시 극락으로 가야겠다.", tendency: k },
    ],
  },
];
