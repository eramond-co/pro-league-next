import { FormJoinLeague } from "./form-join-league/formJoinLeague";
import classes from "./joinOurLeague.module.scss";

export const JoinOurLeague: React.FC = () => {
  return (
    <div id="register" className={classes.joinOurLeague}>
      <div className={classes.title}>
        <h3>Treten Sie unserer Liga bei!</h3>
      </div>
      <div className={classes.description}>
        <p>
          Melden Sie sich jetzt an und seien Sie Teil der Fußballrevolution!
          Ihre Mannschaft könnte die nächste sein, die den großen Preis mit nach
          Hause nimmt.
        </p>
      </div>
      <FormJoinLeague />
    </div>
  );
};
