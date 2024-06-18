import Link from "next/link";
import style from "./isfPartners.module.scss";
import Image from "next/image";
import worldCup from "@/assets/pics/isf-partner/world-cup.png";
import grandPrix from "@/assets/pics/isf-partner/grabd-prix.png";
import championsleague from "@/assets/pics/isf-partner/champions-league.png";

const IsfPartners: React.FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.title}>ISF partner competitions</div>
        <div className={style.items}>
          <div className={style.item}>
            <div className={style.img}>
              <Image src={worldCup} alt="partner" />
            </div>
            <div className={style.texts}>
              <p>
                World cup <br />
                2024
              </p>
              <Link
                href={
                  "https://soccafederation.com/the-world-cup-goes-to-the-middle-east/"
                }
                target="_blank"
              >
                Mehr Info
              </Link>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}>
              <Image src={grandPrix} alt="partner" />
            </div>
            <div className={style.texts}>
              <p>
                Grand prix <br />
                sevens
              </p>
              <Link
                href={
                  "https://soccafederation.com/grand-prix-sevens-returns-to-georgia/"
                }
                target="_blank"
              >
                Mehr Info
              </Link>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}>
              <Image src={worldCup} alt="partner" />
            </div>
            <div className={style.texts}>
              <p>
                ChampionsLeague <br />
                2024{" "}
              </p>
              <Link
                href={"https://soccafederation.com/championsleague/"}
                target="_blank"
              >
                Mehr Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsfPartners;
