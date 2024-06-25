"use client";

import CountDown from "@/components/count-down/count_down";
import style from "./counter.module.scss";

const Counter: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.title}>Bis zum Ligastart</div>
        <CountDown targetDate={new Date(2024, 8, 15, 9)} />
      </div>
    </>
  );
};

export default Counter;
