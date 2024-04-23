import Image, { StaticImageData } from "next/image";
import classes from "./pricingCard.module.scss";

export interface PricingCardProps {
  image: string | StaticImageData;
  logo: React.ReactElement | string;
  description: string;
  reward: number | string;
  entrance: number | string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  image,
  logo,
  description,
  reward,
  entrance,
}) => {
  return (
    <div className={classes.pricingCard}>
      <Image className={classes.background} src={image} alt="Card Background" />
      <div className={classes.content}>
        <div className={classes.logo}>{logo}</div>
        <div className={classes.info}>
          <p className={classes.description}>{description}</p>
          <div className={classes.reward}>
            <p className={classes.title}>Reward</p>
            <p className={classes.value}>
              {/* {reward === "No Reward" ? "" : <span>&#8364;</span>} */}
              {reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className={classes.entrance}>
            <p className={classes.title}>Eintrittspreis</p>
            <p className={classes.value}>
              {/* {entrance === "FREE" ? "" : <span>&#8364;</span>} */}
              {entrance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
