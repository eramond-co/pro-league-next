import Image from "next/image";
import classes from "./banner.module.scss";
import bannerImg from "@/assets/pics/custom banner/Banner 1.png";
import bannerResp from "@/assets/pics/custom banner/Banner-Respons 1.png";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

const BannerSection: React.FC = () => {
  return (
    <div className={classes.bannerSect}>
      <Image className={classes.background} src={bannerImg} alt="banner" />
      <Image className={classes.backgroundResp} src={bannerResp} alt="banner" />
      <div className={classes.content}>
        <h3 className={classes.title}>Ligagebühren Pro League</h3>
        <p className={classes.explain}>
          Die Teilnahmegebühr pro Team beträgt 3000 Euro, inklusive aller Kosten
          für Sportplatz - Schiedsrichter und Organisation{" "}
        </p>
        {/* <ButtonSeconddary className={classes.btn}>Button</ButtonSeconddary> */}
      </div>
    </div>
  );
};

export default BannerSection;
