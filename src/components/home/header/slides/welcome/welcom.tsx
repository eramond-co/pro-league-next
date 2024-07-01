import Image from "next/image";
import classes from "./welcom.module.scss";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";
import { ButtonOutlined } from "@/components/button-outlined/buttonOutlined";
import HeroImageDesktop from "@/assets/pics/header/welcome-hero-image.png";

import HeroimageMobile from "@/assets/pics/header/welcome-hero-image-mobile.png";

const Welcome: React.FC = () => {
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
              <span>
                Der Gewinner fährt zur ISF Championsleauge <br />{" "}
                <span>8.</span>
                September
              </span>
              <h3>
                <span>Welcome</span> <span>Event</span>
              </h3>
            </div>
            <div className={classes.buttonWrapper}>
              <ButtonSeconddary
                className={classes.button}
                isLink
                link="/register/welcome-event"
              >
                <p>Anmelden</p>
              </ButtonSeconddary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
