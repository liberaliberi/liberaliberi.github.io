export type Garden =
  | "ctgk"
  | "cthk"
  | "cjgk"
  | "cjhk"
  | "ctgl"
  | "cthl"
  | "cjgl"
  | "cjhl"
  | "mtgk"
  | "mthk"
  | "mjhk"
  | "mjgk"
  | "mtgl"
  | "mthl"
  | "mjgl"
  | "mjhl";

export interface UserTendency {
  name: string;
  description: string[];
  userGardenType: string;
  fitGarden: Garden;
  badGarden: Garden | null;
  recommand: string;
}

type ResultType = {
  [key: string]: UserTendency;
};

export const result: ResultType = {
  ctgk: {
    name: "헨젤과 그레텔 과자정원",
    description: [
      "자연적이고 자유분방한 환경을 좋아함",
      "나라는 존재감이 없는건 싫다! 적당히 튀는걸 좋아하는 세심한 관종",
      "다소 충동적인 면이 있어서 즉흥적인데서 오는 즐거움에 급 신이나버림",
      "신비주의처럼 보이고 싶지만 사실은 모두에게 관심받고 있는 댕댕이",
      "가끔 굉장히 감성적으로 돌변해서 혼자만의 시간을 필요하다고 주변에 홍보함",
      "친구들을 좋아해서 자기 과자정원에 있는 과자로 자꾸 유혹해서 초대함",
    ],
    userGardenType: "코티지가든, 트로피컬가든, 그라스가든, 키친가든",
    fitGarden: "mjgl",
    badGarden: "mthl",
    recommand: "하우스텐보스",
  },
  ctgl: {
    name: "스카이캐슬 공중정원",
    description: [
      "겉으로는 핵인싸처럼 보이지만 사실상 굉장히 내면적인 벽을 가지고 있음",
      "자기 자신이 굉장히 따뜻하고 인간적이라고 착각하고 있음",
      "친한 사람들이랑만 있으면 세상 모자라보임",
      "귀차니즘은 있는데 정신적으로 완벽주의라 내가 날 괴롭히는 유형",
      "가끔 스트레스를 받으면 굉장히 충동적으로 돌변함",
      "모든 사람을 품을 것 같지만 자기 자신만의 스카이캐슬을 지어놓고 아무나 들여보내주지 않음",
    ],
    userGardenType: "코티지가든, 트로피컬가든, 그라스가든, 리빙가든",
    fitGarden: "mjhk",
    badGarden: null,
    recommand: "싱가폴 PARKROYAL COLLECTION Pickering",
  },
  cthk: {
    name: "국도 지나다 본 고기가든",
    description: [
      "이상적이고 낭만적인 것을 추구하지만 실제로는 현실적인 선택을 함",
      "마음이 약하고 감수성이 풍부하지만 마음을 닫는 순간 뒤도 안돌아봄",
      "열정적이고 활발해서 항상 주변에는 사람이 많음",
      "본인의 행동과 사고에 자부심이 있고 고집도 있음",
      "당신을 스치듯 경험한 사람도 무언가 구수한 매력에 계속 끌리게 만듦",
    ],
    userGardenType: "코티지가든, 트로피컬가든, 한국정원, 키친가든",
    fitGarden: "mjgl",
    badGarden: "cjgk",
    recommand: "충북 제천 카우보이 그릴",
  },
  cthl: {
    name: "화, 목에만 보는 우리가족정원",
    description: [
      "화합과 평화를 좋아하는 평화주의자",
      "두루두루 모든 사람과 잘 지내고 성숙한 느낌을 가지고 있음",
      "통찰과 직관이 좋아서 내적 자존감이 높음",
      "조용한듯 하면서도 존재감을 드러내기 때문에 조직 내에서 지도자 역할이 어울림",
      "은근 아주 가까운 사람들은 잘 못 챙기는 경향이 있음(특히 가족)",
    ],
    userGardenType: "코티지가든, 트로피컬가든, 한국정원, 리빙가든",
    fitGarden: "mjhk",
    badGarden: "mtgk",
    recommand: "충남 천안 아름다운정원 화수목",
  },
  cjgk: {
    name: "산속 연구소 찌릿찌릿 기계정원",
    description: [
      "장난을 좋아하고 호기심이 강해서 세상 모든 일을 다 내가 알아야 함",
      "주의가 산만한 것처럼 보이지만 사실 모든 일을 정리하고 계획해야 직성이 풀림",
      "자극적인걸 원한다고 생각하면서 집에 누워있음",
      "사람들과 항상 놀고 싶고 신나는걸 하고 싶다고 생각하면서 쇼파에 누워있음",
      "익숙한 공간 밖으로 나가는데 신중해서 주로 혼자 굉장히 잘 놈",
    ],
    userGardenType: "코티지가든, 젠가든, 한국정원, 키친가든",
    fitGarden: "mthl",
    badGarden: "cthl",
    recommand: "광주시립미술관 메타가든",
  },
  cjgl: {
    name: "걷게 해줄게 꽃길 정원",
    description: [
      "변화를 좋아하지 않고 나만의 공간과 시간을 매우 중요하게 생각함",
      "책임감이 강해서 주위로부터 신뢰를 받음",
      "계획적으로 하던 일이 틀어지면 고장나서 멘탈 나감",
      "평범해보이지만 혼자 있을 때 이상한 짓 잘함",
      "하나의 길을 정해놓고 평온하게 내 갈길을 가는 것을 좋아함",
    ],
    userGardenType: "코티지가든, 젠가든, 그라스가든, 리빙가든",
    fitGarden: "cjhl",
    badGarden: "cthk",
    recommand: "영국 첼시플라워쇼",
  },
  cjhk: {
    name: "먹깨비 식량창고 쌈채소정원",
    description: [
      "다정하고 친절해서 주변에 친구들이 많은 편",
      "사람들과의 충돌을 싫어해서 거절을 잘 못하지만 한번 아닌건 영원히 손절",
      "자기 것을 나누고 퍼주는 걸 좋아해서 항상 내 주머니는 텅텅",
      "사실 사람 많고 정신없는 곳을 별로 안좋아하는데 거절 못해서 항상 모임에 있는 애",
      "감수성이 풍부하고 긍정적인 기운이 있어 주변에 없어서는 안될 쌈채소같은 존재",
    ],
    userGardenType: "코티지가든, 젠가든, 한국정원, 키친가든",
    fitGarden: "mtgl",
    badGarden: "mjhk",
    recommand: "화성 감자밭",
  },
  cjhl: {
    name: "비밀가득, 향기만땅 찻잎정원",
    description: [
      "모두에게 친절하고 상냥한데 무언가 굉장히 개인주의의 느낌이 있음",
      "주로 이야기를 듣는 편이며 내 이야기는 잘 하지 않는 편",
      "특유의 묘한 분위기로 주변에 친해지고 싶어하는 사람들이 많음",
      "꼼꼼하고 기억력이 좋음",
      "나 자신이 유머러스하다고 생각하지만 상대방은 내적 하품중",
      "내 이야기를 하지 않을 뿐 생각보다 수다스러워서 사람들과의 티타임, 커피타임을 좋아함",
    ],
    userGardenType: "코티지가든, 젠가든, 한국정원, 리빙가든",
    fitGarden: "mthk",
    badGarden: "mjhl",
    recommand: "제주 오설록 녹차밭",
  },
  mtgk: {
    name: "차가운 도시 속 루프탑 정원 ",
    description: [
      "직설적이면서 화려한 언변을 가져서 사람들이 정신을 못차림",
      "누군가에게 조언을 해주거나 가르침을 주는 것을 좋아함",
      "정작 자기는 말보다 행동이 앞서서 실수가 잦으나 자기에게는 이 모든게 관대함",
      "공감능력은 없어보이는데 무언가 다정해서 당황스럽게 함",
      "차가워보이지만 생각보다 사람을 좋아해서 다가오는 사람을 막는 법은 없음",
    ],
    userGardenType: "모던가든, 트로피컬가든, 그라스가든, 키친가든",
    fitGarden: "cjgl",
    badGarden: "cthl",
    recommand: "카더가든",
  },
  mtgl: {
    name: "방콕 어느 호텔 휴양정원",
    description: [
      "상황이 복잡하고 어려워질수록 평정심을 찾음",
      "일할때 비효율적인 상황을 참지 못하고 자기 식으로 뜯어 고쳐야 직성이 풀림",
      "자신에게도 굉장히 엄격한 타입이라 남들도 자신의 기준만큼 해주기를 바람",
      "표현을 잘 못하기 때문에 표현을 많이 하는 사람과 있으면 고장남",
      "내면에선 전쟁 중일지 몰라도 겉으로는 티가 안나서 사람들이 평온한 사람으로 착각함",
      "남을 잘 챙기고 이야기를 잘 들어줘서 주변 친구들에게 마치 휴양지 쉼터같은 역할을 함",
    ],
    userGardenType: "모던가든, 트로피컬가든, 그라스가든, 리빙가든",
    fitGarden: "ctgk",
    badGarden: "mjhk",
    recommand: "차정원",
  },
  mthk: {
    name: "북촌 어느 골목길 소소한 파티정원",
    description: [
      "순간의 감정에 굉장히 솔직해서 충동적인 행동을 많이 하는 대표 또라이",
      "사교적이고 활동적이며 누구보다 적극적임",
      "깊은 고민을 하는 것을 좋아하지 않아서 과거에 했던 실수를 무한 반복함",
      "장기적인 계획을 세우는 것에 약해서 주변 사람들이 불안해하지만 운도 좋아서 중간이상은 감",
      "항상 집밖에 있지만 지치거나 슬럼프가 오면 갑자기 세상과 단절하려고 함",
      "엄청난 성공보다는 지금 나에게 주어진 소소한 행복이 더 중요한 사람",
    ],
    userGardenType: "모던가든, 트로피컬가든, 한국정원, 키친가든",
    fitGarden: "cjgl",
    badGarden: "mjhl",
    recommand: "은평 한옥마을",
  },
  mthl: {
    name: "최신식 식물재배기 트랜디정원",
    description: [
      "조직적이고 어느정도 체계가 갖춰진 곳에 있을 때 안정감을 느낌",
      "본인이 주체가 되어서 목소리를 내는 것을 좋아함",
      "눈치가 빠르고 감정의 캐치를 잘해서 타인과 트러블이 일어나는 일이 적음",
      "생각보다 인간관계에 있어 오는 스트레스를 많이 받지만 티를 내지 않음",
      "최신의 소식과 지식에 관심이 많아 항상 뭘 검색하거나 읽고있음",
      "항상 재배기처럼 누군가를 돌보고 케어해주기 때문에 사람들이 안전한 울타리라고 느낌",
    ],
    userGardenType: "모던가든, 트로피컬가든, 한국정원, 리빙가든",
    fitGarden: "cjgk",
    badGarden: "mjhk",
    recommand: "LG 틔운",
  },
  mjgk: {
    name: "쿨한척 민트정원",
    description: [
      "미친 놈 소리를 들으면 좋아, 짜릿해",
      "세상에서 자기가 가장 웃기다고 생각하는데 또 망가지는건 안좋아함",
      "남들을 즐겁게 해주는걸 좋아하지만 그만큼 사랑받아야 함",
      "타인의 감정을 잘 읽기 때문에 예민하고 상처도 잘 받음",
      "집중력이 짧고 여기저기 호기심이 많아서 산만함",
      "이 사람 쿨한 척임 진짜 쿨한거 아님",
    ],
    userGardenType: "모던가든, 젠가든, 그라스가든, 키친가든",
    fitGarden: "ctgl",
    badGarden: "mtgl",
    recommand: "대관령 하늘목장",
  },
  mjgl: {
    name: "나의 왕국에 초대하마, 왕실정원",
    description: [
      "항상 자신감이 있고 누군가를 이끌기를 잘함",
      "예민하고 냉정해서 주변 사람들이 상처받지만 정작 본인은 신경도 안씀",
      "정리 안된 것을 못참는 완벽주의적 피곤한 성향",
      "강한 상대에게는 절대 안지지만 작고 귀엽고 하찮은 것들에 쉽게 무너짐",
      "한번 목표를 세우면 무섭게 이뤄내기 때문에 성공을 하고 싶다면 이 사람 왕국의 국민이 되면 됨",
    ],
    userGardenType: "모던가든, 젠가든, 그라스가든, 리빙가든",
    fitGarden: "ctgk",
    badGarden: null,
    recommand: "춘천 제이드가든",
  },
  mjhk: {
    name: "차 한잔의 여유 허브정원",
    description: [
      "어딘가 따뜻하면서도 자유로운 분위기를 가졌음",
      "개인이 가진 개성과 취향을 존중받는 것은 이 사람에 있어서 굉장히 중요한 문제임",
      "반복되거나 틀에 박힌 일에는 흥미를 느끼지 못함",
      "단순하게 인생을 사는 것 처럼 보이는데 내적 고민이 많음",
      "남들과 깊은 유대를 형성하면서도 자기 자신에 대한 독립적 성향을 잃지 않아서 항상 여유있어 보임",
    ],
    userGardenType: "모던가든, 젠가든, 한국정원, 허브가든",
    fitGarden: "ctgl",
    badGarden: "cjgk",
    recommand: "파주 뮌스터담",
  },
  mjhl: {
    name: "여긴어디 미스터리서클정원",
    description: [
      "따뜻하고 사교적이며 감수성이 예민함",
      "항상 해피한 얼굴을 하고 있지만 속으로는 다른 감정일 확률이 높음",
      "눈치가 빠르고 상황파악 능력이 좋아서 모든 일을 수월하게 처리함",
      "자기자신에 대한 기대치가 높아서 작은 실수에도 멘탈이 자주 망가짐",
      "싫은 말을 잘 못하지만 상대가 선을 넘는 순간 ‘정색 + 평온한 목소리 + 팩트 폭격기’로 돌변",
      "하도 환경에 따라 성향이 변해서 자신도, 남들도 이 사람의 진짜 성격에 대한 미스터리함을 느낌",
    ],
    userGardenType: "모던가든, 젠가든, 한국정원, 리빙가든",
    fitGarden: "cthk",
    badGarden: "cjgl",
    recommand: "이스터섬 주호민상",
  },
};

export const checkGardenType = (garden: string | string[] | undefined) => {
  return typeof garden === "string" ? result[garden] : null;
};
