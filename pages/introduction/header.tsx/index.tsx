import { ServiceButton } from "../../../components/button/servive";

export default function Header() {
  return (
    <>
      <h1>
        쉽고 가까운 정원을 위한
        <br /> 변화의 시작
      </h1>
      <ServiceButton
        href={process.env.NEXT_PUBLIC_GOOGLE_FORM!}
        name="서비스 이용하기"
      />
    </>
  );
}
