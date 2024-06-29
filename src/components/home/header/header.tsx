"use client";

import { NavBar } from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import Image from "next/image";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

//image
import { ButtonOutlined } from "@/components/button-outlined/buttonOutlined";
import Socca from "./slides/socca/socca";
import AliceCarousel from "react-alice-carousel";

export const Header: React.FC = () => {
  const sliderList = [
    {
      Component: <Socca />,
    },
    {
      Component: <Socca />,
    },
  ];

  return (
    <header className={classes.headerWrapper}>
      {/* <NavBar className={classes.navbar} /> */}
      <Socca />
      {/* <AliceCarousel
        // duration={250}
        // showSlideInfo={true}
        // preventEventOnTouchMove={preventEventOnTouchMove}
        // mouseTrackingEnabled={mouseTrackingEnabled}
        // onSlideChanged={console.debug}
        // responsive={this.responsive}
        // ref={this.carouselRef}
        // isRTL={true}
        autoPlay
        autoPlayInterval={5000}
        items={sliderList.map(({ Component }) => Component)}
        infinite
      /> */}
    </header>
  );
};
