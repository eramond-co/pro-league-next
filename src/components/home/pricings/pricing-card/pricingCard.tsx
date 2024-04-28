"use client";

import Image, { StaticImageData } from "next/image";
import classes from "./pricingCard.module.scss";
import backImg from "@/assets/pics/pricings/Rectangle 270.jpg";
import { useState } from "react";

export interface PricingCardProps {
  image: string | StaticImageData;
  logo: React.ReactElement | string;
  description: string;
  reward: number | string;
  entrance: number | string;
  items: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  image,
  logo,
  description,
  reward,
  entrance,
  items,
}) => {
  const [backIsvisible, setBackIsVisible] = useState<boolean>(false);

  return (
    <div
      className={classes.pricingCard}
      // onMouseEnter={() => setBackIsVisible(true)}
      onMouseLeave={() => setBackIsVisible(false)}
      onClick={() => setBackIsVisible((state) => !state)}
    >
      <Image className={classes.background} src={image} alt="Card Background" />
      <div className={classes.content}>
        <div className={classes.logo}>{logo}</div>
        <div className={classes.info}>
          <p className={classes.description}>{description}</p>
          <div className={classes.reward}>
            <p className={classes.title}>Gewinn</p>
            <p className={classes.value}>
              {/* {reward === "No Reward" ? "" : <span>&#8364;</span>} */}
              {reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className={classes.entrance}>
            <p className={classes.title}>Ligagebühr</p>
            <p className={classes.value}>
              {/* {entrance === "FREE" ? "" : <span>&#8364;</span>} */}
              {entrance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>
      <div
        className={classes.cardInfo}
        style={{ opacity: backIsvisible ? "1" : "0" }}
      >
        <Image className={classes.backImg} src={backImg} alt="background" />
        <div className={classes.backContent}>
          <p className={classes.title}>{logo}</p>
          <ul className={classes.list}>
            {items.map((item: string) => {
              return (
                <li key={item} className={classes.listItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
