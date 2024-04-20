import classes from "./home.module.scss";
import { Header } from "@/components/home/header/header";
import { Footer } from "@/components/footer/footer";
import ProLeagueInfo from "./pro-league-info/proLeagueInfo";
import Pricings from "./pricings/pricings";
import HomeServices from "./services/services";
import BannerSection from "./banner/banner";

export const HomeComponent: React.FC = () => {
  return (
    <div className={classes.home}>
      <Header />
      <main className={classes.mainWrapper}>
        <div className={classes.main}>
          <ProLeagueInfo />
          <Pricings />
          <HomeServices />
          <BannerSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};
