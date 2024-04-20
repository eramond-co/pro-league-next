import classes from "./services.module.scss";
import { KitIcon, LiveScoreIcon, CameraIcon } from "@/svgs/pouriyaSvgs";

const HomeServices: React.FC = () => {
  return (
    <div className={classes.services}>
      <h3 className={classes.title}>Services</h3>
      <div className={classes.container}>
        <div className={classes.item}>
          <div className={`${classes.icon} ${classes.kit}`}>
            <KitIcon />
          </div>
          <p className={classes.title}>Kit</p>
          <p className={classes.explain}>
            {
              "Upgrade your team's look with our kits, designed for performance and style."
            }
          </p>
        </div>
        <div className={classes.item}>
          <div className={`${classes.icon} ${classes.liveScore}`}>
            <LiveScoreIcon />
          </div>
          <p className={classes.title}>Live Score</p>
          <p className={classes.explain}>
            Get instant updates on goals, assists, and match statistics as they
            happen.
          </p>
        </div>
        <div className={classes.item}>
          <div className={`${classes.icon} ${classes.liveStream}`}>
            <CameraIcon />
          </div>
          <p className={classes.title}>Live Stream</p>
          <p className={classes.explain}>
            Watch the action unfold in real-time with our live streaming
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
