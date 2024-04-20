import { NavBar } from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import Image from "next/image";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

//image
import HeroImageDesktop from "@/assets/pics/header/hero-image.png";
import HeroimageMobile from "@/assets/pics/header/hero-image-mobile.png";

export const Header: React.FC = () => {
  return (
    <header className={classes.headerWrapper}>
      <NavBar className={classes.navbar} />
      <div className={classes.heroImage}>
        <Image src={HeroImageDesktop} alt="hero-image" />
      </div>
      <div className={classes.heroImageMobile}>
        <Image src={HeroimageMobile} alt="hero-image" />
      </div>
      <div className={classes.header}>
        <div className={classes.textWrapper}>
          <div className={classes.title}>
            <h3>Chance to win</h3>
            <p>
              <span>€</span> 15,000
            </p>
          </div>
          <div className={classes.description}>
            <p>
              Lorem ipsum dolor sit amet. Aut voluptatem odit et quia sapiente
              in modi eligendi ea quisquam.
            </p>
          </div>
          <div className={classes.buttonWrapper}>
            <ButtonSeconddary className={classes.button} isLink link="#">
              <p>Join To League</p>
            </ButtonSeconddary>
          </div>
        </div>
      </div>
    </header>
  );
};
