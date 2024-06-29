import Image from "next/image";
import classes from "./socca.module.scss";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";
import { ButtonOutlined } from "@/components/button-outlined/buttonOutlined";
import HeroImageDesktop from "@/assets/pics/header/hero-image.png";

import HeroimageMobile from "@/assets/pics/header/hero-image-mobile.png";

const Socca: React.FC = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.heroImage}>
          <Image src={HeroImageDesktop} alt="hero-image" />
        </div>
        <div className={classes.heroImageMobile}>
          <Image src={HeroimageMobile} alt="hero-image" />
        </div>
        <div className={classes.header}>
          <div className={classes.textWrapper}>
            <div className={classes.title}>
              <span>Socca Austria</span>
              <h3>
                Der Puls des <br /> modernen Fußballs!
              </h3>
            </div>
            <div className={classes.description}>
              <p>
                Erleben Sie die Spannung unserer neu gegründeten Soccaliga, wo
                Leidenschaft auf Professionalität trifft.
              </p>
            </div>
            <div className={classes.buttonWrapper}>
              <ButtonSeconddary
                className={classes.button}
                isLink
                link="#register"
              >
                <p>Anmelden</p>
              </ButtonSeconddary>
              <ButtonOutlined className={classes.button} isLink link="/info">
                Infos zur Anmeldung
              </ButtonOutlined>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socca;
