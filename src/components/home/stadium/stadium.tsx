import Image from "next/image";
import style from "./stadium.module.scss";

import stadium from "@/assets/pics/stadium.png";

const Stadium: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.img}>
          <Image src={stadium} alt="stadium" />
        </div>
        <div className={style.detail}>
          <h2>SV Donau</h2>
          <p>Wien, Austria</p>
        </div>
      </div>
    </>
  );
};

export default Stadium;
