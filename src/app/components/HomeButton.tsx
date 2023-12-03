"use client";
//서버 컴포넌트X
//상세페이지가 클라이언트 컴포넌트가 되는 걸 막기위해
//HomeButton() => 최대한 말단으로

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // console.log("뒤로!");
  };

  return <button onClick={handleClick}>홈으로</button>;
}
