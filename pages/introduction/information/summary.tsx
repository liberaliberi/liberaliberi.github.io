import Template, { SummaryTemplateProps } from "./summary-template";

const summaryData: SummaryTemplateProps[] = [
  {
    icon: "reference",
    title: "다양한 레퍼런스 데이터",
    summary: "설계에 필요한 다양한 영감을 당신의 공간에 활용해 보세요",
  },
  {
    icon: "filter",
    title: "빠르고 정확한 탐색",
    summary: "원하는 공간의 특징을 통해 필요한 자료를 빠르고 쉽게 탐색하세요",
  },
  {
    icon: "network",
    title: "업체 간 홍보 네트워킹",
    summary:
      "다양한 업체들 간 네트워크 형성을 통해 건강한 생태계를 제공합니다.",
  },
];

export default function Summary() {
  return (
    <>
      {summaryData.map(({ icon, summary, title }: SummaryTemplateProps) => (
        <div>
          <Template icon={icon} key={icon} summary={summary} title={title} />
        </div>
      ))}
    </>
  );
}
