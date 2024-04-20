"use client";

import {
  InputDefaultUikit,
  InputNumberUikit,
} from "@/components/uikits/inputs/inputs";
import classes from "./formJoinLeague.module.scss";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

export const FormJoinLeague: React.FC = () => {
  return (
    <form className={classes.form}>
      <InputDefaultUikit placeHolder="Full Name" />
      <InputDefaultUikit placeHolder="Email" />
      <InputNumberUikit
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Phone Number"
      />

      <ButtonSeconddary type="submit">
        <p>Submit</p>
      </ButtonSeconddary>
    </form>
  );
};
