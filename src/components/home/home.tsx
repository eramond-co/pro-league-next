import classes from "./home.module.scss";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export const HomeComponent: React.FC = () => {
  return(
    <div className={classes.home}>
      <Header />
      <main className={classes.mainWrapper}>
        <div className={classes.main}>

        </div>
      </main>
      <Footer />
    </div>
  )
}