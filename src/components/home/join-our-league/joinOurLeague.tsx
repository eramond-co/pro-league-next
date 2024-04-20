import { FormJoinLeague } from "./form-join-league/formJoinLeague";
import classes from "./joinOurLeague.module.scss";

export const JoinOurLeague: React.FC = () => {
  return (
    <div className={classes.joinOurLeague}>
      <div className={classes.title}>
        <h3>Join Our Soccer League!</h3>
      </div>
      <div className={classes.description}>
        <p>
          Enter your email and phone number below to join our league and stay
          updated on matches, news, and registration details.
        </p>
      </div>
      <FormJoinLeague />
    </div>
  );
};
