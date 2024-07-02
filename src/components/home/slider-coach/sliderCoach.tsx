"use client";

import { StaticImageData } from "next/image";
import classes from "./sliderCoach.module.scss";

import { CoachItem } from "./coach-item/coachItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import ronaldinho from "@/assets/pics/quotes/ronaldinho.png";
import carlos from "@/assets/pics/quotes/carlos.png";
import ryan from "@/assets/pics/quotes/ryan.png";
import terry from "@/assets/pics/quotes/terry.png";

interface CoachItemPropsDataType {
  id: string;
  image: string | StaticImageData;
  name: string;
  description: string;
}

export const SliderCoach: React.FC = () => {
  const coachItems: CoachItemPropsDataType[] = [
    {
      id: "1",
      name: "Ronaldinho",
      image: ronaldinho,
      description:
        "“This is exactly what is needed. Taking the game of 5,6 and 7-a-side around the world will be a massive boost for players everywhere.”",
    },
    {
      id: "2",
      name: "Ryan Giggs",
      image: ryan,
      description:
        "“To have an organisation like Leisure Leagues support this Federation will do great things.”",
    },
    {
      id: "3",
      name: "Roberto Carlos",
      image: carlos,
      description:
        "“I congratulate the work being done to develop 6 a side and grassroots sport across the world.”",
    },
    {
      id: "4",
      name: "John Terry",
      image: terry,
      description:
        "“I would like to congratulate Leisure Leagues on their initiative developing football worldwide. I know it will be a fantastic event.”",
    },
  ];

  return (
    <div className={classes.sliderCoachWrapper}>
      <div className={classes.sliderCoach}>
        <AliceCarousel
          // duration={250}
          // showSlideInfo={true}
          // preventEventOnTouchMove={preventEventOnTouchMove}
          // mouseTrackingEnabled={mouseTrackingEnabled}
          // onSlideChanged={console.debug}
          // responsive={this.responsive}
          // ref={this.carouselRef}
          // isRTL={true}
          autoPlay
          autoPlayInterval={4000}
          items={coachItems.map((coach) => (
            <CoachItem {...coach} key={coach.id} />
          ))}
          infinite
        />
      </div>
    </div>
  );
};
