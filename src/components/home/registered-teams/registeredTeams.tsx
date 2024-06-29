import Image from "next/image";
import classes from "./registeredTeams.module.scss";
import eliteWien from "@/assets/pics/Teams/Elite Wien.png";
import FKBosna from "@/assets/pics/Teams/FK Bosna.png";
import FCBacishta from "@/assets/pics/Teams/FC Bacishta.png";
import WolfsrudelFC from "@/assets/pics/Teams/Wolfsrudel FC.png";
import TheLegends from "@/assets/pics/Teams/The Legends.png";
import FCZukunft from "@/assets/pics/Teams/FC Zukunft.png";
import FCRoyal from "@/assets/pics/Teams/fc royal.png";
import NKZagreb from "@/assets/pics/Teams/nk zagreb.png";

const RegisteredTeamsSection: React.FC = () => {
  return (
    <div className={classes.registeredTeams}>
      <h3 className={classes.title}>Registrierte Teams</h3>
      <div className={classes.container}>
        <div className={classes.item}>
          <Image src={eliteWien} alt="Elite Wien" />
          <p className={classes.teamName}>Elite Wien</p>
        </div>
        <div className={classes.item}>
          <Image src={FKBosna} alt="FK Bosna" />
          <p className={classes.teamName}>FK Bosna</p>
        </div>
        <div className={classes.item}>
          <Image src={FCRoyal} alt="FC Royal" />
          <p className={classes.teamName}>FC Royal</p>
        </div>
        <div className={classes.item}>
          <Image src={NKZagreb} alt="NK Zagreb" />
          <p className={classes.teamName}>NK Zagreb</p>
        </div>
        <div className={classes.item}>
          <Image src={FCBacishta} alt="FC Bacishta" />
          <p className={classes.teamName}>FC Bacishta</p>
        </div>
        <div className={classes.item}>
          <Image src={WolfsrudelFC} alt="Wolfsrudel FC" />
          <p className={classes.teamName}>Wolfsrudel FC</p>
        </div>
        <div className={classes.item}>
          <Image src={TheLegends} alt="The Legends" />
          <p className={classes.teamName}>The Legends</p>
        </div>
        <div className={classes.item}>
          <Image src={FCZukunft} alt="FC Zukunft" />
          <p className={classes.teamName}>FC Zukunft</p>
        </div>
      </div>
    </div>
  );
};

export default RegisteredTeamsSection;
