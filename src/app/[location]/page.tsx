// "use client"; //내보내기 제거

import HomeButton from "../components/HomeButton";
import { getForecast } from "../utils/getForecast";

type Props = {
  params: {
    location: string;
  };

  searchParams: {
    name: string;
  };
};

//generateMetadata
export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨앱 - ${searchParams.name}`,
    discription: `${searchParams.name} 날씨를 알려드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const res = await getForecast(params.location); //async 준비 후, await

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
