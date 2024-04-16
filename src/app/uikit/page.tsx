"use client";

import { useFormik } from "formik";
import classes from "./page.module.scss";
import {
  InputDefaultUikit,
  InputNumberUikit,
} from "@/components/uikits/inputs/inputs";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

const UikitsPage: React.FC = () => {
  const initalValue = {
    phone_number: "",
  };

  const { setFieldValue, handleSubmit } = useFormik({
    initialValues: initalValue,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <title>uikits</title>

      <div className={classes.inputs}>
        <InputDefaultUikit placeHolder="Full Name" className={classes.input} />
        <InputDefaultUikit
          placeHolder="Full Name"
          className={classes.input}
          messageError="this feild is required"
        />
        <form onSubmit={handleSubmit}>
          <InputNumberUikit
            placeHolder="Phone Number"
            className={classes.input}
            onChange={(v) => {
              setFieldValue("phone_number", v);
            }}
          />

          <ButtonSeconddary type="submit" isLink={false}>
            <p>Send</p>
          </ButtonSeconddary>
        </form>
        {/* <InputNumberUikit
          placeHolder="Phone Number"
          className={classes.input}
          messageError="this feild is required"
        /> */}
      </div>
    </>
  );
};

export default UikitsPage;
