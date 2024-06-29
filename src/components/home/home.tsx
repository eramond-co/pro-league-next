import classes from "./home.module.scss";
import { Header } from "@/components/home/header/header";
import { Footer } from "@/components/footer/footer";
import ProLeagueInfo from "./pro-league-info/proLeagueInfo";
import Pricings from "./pricings/pricings";
import HomeServices from "./services/services";
import { Partners } from "./partners/partners";
import { JoinOurLeague } from "./join-our-league/joinOurLeague";
import BannerSection from "./banner/banner";
import { YoutubeVideo } from "@/components/home/youtube-video/page";
import React from "react";
import ScrollTop from "../scroll-top/scrollTop";
import Isf from "./isf/isf";
import Counter from "./counter/counter";
import IsfPartners from "./isf-partners/isfPartners";
import Stadium from "./stadium/stadium";
import { SliderCoach } from "./slider-coach/sliderCoach";
import RegisteredTeamsSection from "./registered-teams/registeredTeams";
import Popup from "./popup/popup";
import { NavBar } from "../navbar/navbar";

export const HomeComponent: React.FC = () => {
  return (
    <div className={classes.home}>
      <NavBar className={classes.navbar} />
      <Popup />
      <ScrollTop />
      <Header />
      <main className={classes.mainWrapper}>
        <div className={classes.main}>
          <Isf />
          <Counter />
          <ProLeagueInfo />
          <Pricings />
          <RegisteredTeamsSection />
          <HomeServices />
          <BannerSection />
          <YoutubeVideo />
          <IsfPartners />
          <Stadium />
          <SliderCoach />
          <Partners />
          <JoinOurLeague />
        </div>
      </main>
      <Footer />
    </div>
  );
};
