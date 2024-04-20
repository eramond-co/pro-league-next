import classes from "./proLeagueInfo.module.scss";

const ProLeagueInfo: React.FC = () => {
  return (
    <div className={classes.proLeagueInfo}>
      <h3 className={classes.title}>Pro League</h3>
      <p className={classes.explain}>
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful
        content. Lorem ipsum may be used as a placeholder before the final copy
        is available. Lorem ipsum is a placeholder text commonly used to
        demonstrate the visual form of a document.
      </p>
    </div>
  );
};

export default ProLeagueInfo;
