import Image from "next/image";
import style from "./isf.module.scss";
import socca from "@/assets/pics/isf/socca.png";
import Link from "next/link";
const Isf: React.FC = () => {
  return (
    <>
      <Link
        href={"https://soccafederation.com/"}
        target="_blank"
        className={style.main}
      >
        <div className={style.texts}>
          <h2>Socca Austria,</h2>
          <p>Official member of ISF</p>
        </div>
        <div className={style.socca}>
          <Image alt="socca" src={socca} />
        </div>
      </Link>
    </>
  );
};

export default Isf;
