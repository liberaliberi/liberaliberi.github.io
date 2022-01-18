import { useRouter } from "next/router";

export default function Result() {
const { query } = useRouter();
  return <>나의성향은: {query.a}</>;
}
