"use client";

import {
  InputDefaultUikit,
  InputNumberUikit,
} from "@/components/uikits/inputs/inputs";
import classes from "./formJoinLeague.module.scss";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";
import { SelectUikit } from "@/components/uikits/select/selectBox";
import { useFormik } from "formik";
import * as yup from "yup";
import addRequestProleague from "@/api/add-request-proleague/addRequestProleague";
import { useState } from "react";
import addRequestSoccaWelcom from "@/api/add-request-socca-welcome/addRequestSoccaWelcom";

interface SelectBoxDataType {
  id: string;
  title: string;
}

interface FormDataType {
  full_name: string;
  email: string;
  phone_number: string;
  // choose_league: string;
  checkbox: boolean;
}

export const FormJoinLeague: React.FC = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successStatus, setSuccessStatus] = useState<boolean>(false);

  const initialValues = {
    full_name: "",
    email: "",
    phone_number: "",
    // choose_league: "",
    checkbox: false,
  };

  const {
    setFieldValue,
    handleSubmit,
    errors,
    touched,
    resetForm,
    getFieldProps,
    values,
  } = useFormik<FormDataType>({
    initialValues,
    validationSchema: yup.object({
      full_name: yup
        .string()
        .required("Geben Sie Ihren vollständigen Namen ein."),
      email: yup
        .string()
        .required("geben sie ihre E-Mail Adresse ein.")
        .email("Ungültige E-Mail."),
      phone_number: yup
        .string()
        .required("Gib deine Telefonnummer ein.")
        .min(11, "Ungültige Telefonnummer."),
      // choose_league: yup.string().required("Wählen Sie eine Liga."),
      checkbox: yup.boolean().isTrue("erforderlich."),
    }),
    onSubmit: (values) => {
      setloading(true);

      addRequestSoccaWelcom({
        email: values.email,
        mobile: values.phone_number,
        name: values.full_name,
        acceptme: values.checkbox === true ? 1 : 0,
      }).then((res) => {
        setloading(false);
        if (res.result) {
          setSuccessMessage("erfolgreich!");
          setSuccessStatus(true);
          resetForm();
        } else {
          setSuccessMessage("erfolglos!");
          setSuccessStatus(false);
        }
      });
    },
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputDefaultUikit
        placeHolder="Vollständiger Name"
        inputProps={{
          ...getFieldProps("full_name"),
          onChange: (e) => {
            setFieldValue("full_name", e.target.value);
          },
        }}
        messageError={touched.full_name ? errors.full_name : undefined}
      />
      <InputDefaultUikit
        placeHolder="Email"
        inputProps={{
          ...getFieldProps("email"),
        }}
        messageError={touched.email ? errors.email : undefined}
      />
      {/* <InputNumberUikit
        onChange={(v) => {
          setFieldValue("phone_number", v);
        }}
        placeHolder="Phone Number"
        messageError={touched.phone_number ? errors.phone_number : undefined}
      /> */}
      <InputDefaultUikit
        placeHolder="Telefonnummer"
        inputProps={{
          ...getFieldProps("phone_number"),
        }}
        messageError={touched.phone_number ? errors.phone_number : undefined}
      />

      <div className={classes.checkboxLayout}>
        <div className={classes.checkboxWrapper}>
          <input
            type="checkbox"
            onChange={(e) => {
              setFieldValue("checkbox", e.target.checked);
            }}
            checked={values.checkbox}
          />
          <div className={classes.checkbox}></div>
          <div className={classes.text}>
            <p>
              ich habe Interesse am Event teilzunehmen und möchte mich anmelden.{" "}
            </p>
          </div>
        </div>
        {errors.checkbox && (
          <span className={classes.error}>{errors.checkbox}</span>
        )}
      </div>

      <ButtonSeconddary type="submit">
        <p>{loading ? "Senden ..." : "Anmelden"}</p>
      </ButtonSeconddary>

      {successMessage && (
        <span className={successStatus ? classes.success : classes.error}>
          {successMessage}
        </span>
      )}
    </form>
  );
};
