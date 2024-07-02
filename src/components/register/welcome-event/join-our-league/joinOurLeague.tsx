import { FormJoinLeague } from "./form-join-league/formJoinLeague";
import classes from "./joinOurLeague.module.scss";

export const JoinOurLeague: React.FC = () => {
  return (
    <div id="register" className={classes.joinOurLeague}>
      <div className={classes.title}>
        <h3>Event Anmeldung</h3>
      </div>
      <div className={classes.description}>
        <p>
          Melden Sie sich jetzt an und seien Sie Teil der Fußballrevolution!{" "}
        </p>
      </div>
      <FormJoinLeague />
    </div>
  );
};
