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

interface SelectBoxDataType {
  id: string;
  title: string;
}

interface FormDataType {
  full_name: string;
  email: string;
  phone_number: string;
  choose_league: string;
  checkbox: boolean;
}

export const FormJoinLeague: React.FC = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successStatus, setSuccessStatus] = useState<boolean>(false);

  const listSelectOption: SelectBoxDataType[] = [
    {
      id: "1",
      title: "Pro League",
    },
    {
      id: "2",
      title: "Amateur League",
    },
    {
      id: "3",
      title: "Hobby League",
    },
  ];

  const initialValues = {
    full_name: "",
    email: "",
    phone_number: "",
    choose_league: "",
    checkbox: false,
  };

  const { setFieldValue, handleSubmit, errors, touched } =
    useFormik<FormDataType>({
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
        choose_league: yup.string().required("Wählen Sie eine Liga."),
        // checkbox: yup.boolean().required("erforderlich."),
      }),
      onSubmit: (values) => {
        setloading(true);

        addRequestProleague({
          email: values.email,
          league: values.choose_league,
          mobile: values.phone_number,
          name: values.full_name,
          acceptme: values.checkbox === true ? 1 : 0,
        }).then((res) => {
          if (res.result) {
            setloading(false);
            setSuccessMessage("erfolgreich!");
          } else {
            setSuccessMessage("erfolglos!");
          }
        });
      },
    });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputDefaultUikit
        placeHolder="Vollständiger Name"
        inputProps={{
          onChange: (e) => {
            setFieldValue("full_name", e.target.value);
          },
        }}
        messageError={touched.full_name ? errors.full_name : undefined}
      />
      <InputDefaultUikit
        placeHolder="Email"
        inputProps={{
          onChange: (e) => {
            setFieldValue("email", e.target.value);
          },
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
          onChange: (e) => {
            setFieldValue("phone_number", e.target.value);
          },
        }}
        messageError={touched.phone_number ? errors.phone_number : undefined}
      />
      <SelectUikit
        placeHolder="Wählen Sie Liga"
        list={listSelectOption}
        onChange={(v) => {
          if (v) {
            setFieldValue("choose_league", v.id);
          }
        }}
        messageError={touched.choose_league ? errors.choose_league : undefined}
      />

      <div className={classes.checkboxLayout}>
        <div className={classes.checkboxWrapper}>
          <input
            type="checkbox"
            onChange={(e) => {
              setFieldValue("checkbox", e.target.checked);
              // console.log(e);
            }}
          />
          <div className={classes.checkbox}></div>
          <div className={classes.text}>
            <p>
              Ich habe Interesse der Liga beizutreten und möchte gerne mehr
              Informationen.
            </p>
          </div>
        </div>
        {/* {touched.checkbox && (
          <span className={classes.error}>{errors.checkbox}</span>
        )} */}
      </div>

      <ButtonSeconddary type="submit">
        <p>{loading ? "Senden ..." : "Einreichen"}</p>
      </ButtonSeconddary>

      {successMessage && (
        <span className={successStatus ? classes.success : classes.error}>
          {successMessage}
        </span>
      )}
    </form>
  );
};
