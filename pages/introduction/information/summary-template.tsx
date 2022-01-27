import styles from "../../../styles/introduction.module.scss";

type IconType = "reference" | "filter" | "network";

export interface SummaryTemplateProps {
  icon: IconType;
  title: string;
  summary: string;
}

function selectBgColor(icon: IconType) {
  switch (icon) {
    case "reference":
      return "#ebf0f4";
    case "filter":
      return "#D9EFEF";
    case "network":
      return "#FAF4DE";
    default:
      return "#fff";
  }
}

export default function SummaryTemplate({
  icon,
  summary,
  title,
}: SummaryTemplateProps) {
  const bgColor = selectBgColor(icon);
  return (
    <>
      <div
        className={styles.information__logo}
        style={{ backgroundColor: bgColor }}
      >
        <img src={`/${icon}.svg`} width="71" height="100%" alt={icon} />
      </div>
      <div className={styles.information__function}>{title}</div>
      <div className={styles.information__description}>{summary}</div>
    </>
  );
}
