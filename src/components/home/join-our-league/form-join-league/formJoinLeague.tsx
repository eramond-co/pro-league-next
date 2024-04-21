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
}

export const FormJoinLeague: React.FC = () => {
  const [loading, setloading] = useState<boolean>(false);

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
  };

  const { setFieldValue, handleSubmit, errors, touched } =
    useFormik<FormDataType>({
      initialValues,
      validationSchema: yup.object({
        full_name: yup.string().required("Enter your Full Name."),
        email: yup
          .string()
          .required("Enter your Email.")
          .email("Invalid Email."),
        phone_number: yup.string().required("Enter your Phone Number."),
        choose_league: yup.string().required("Choose a league."),
      }),
      onSubmit: (values) => {
        setloading(true);

        addRequestProleague({
          email: values.email,
          league: values.choose_league,
          mobile: values.phone_number,
          name: values.full_name,
        }).then((res) => {
          if (res.result) {
            setloading(false);
          }
        });
      },
    });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputDefaultUikit
        placeHolder="Full Name"
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
      <InputNumberUikit
        onChange={(v) => {
          setFieldValue("phone_number", v);
        }}
        placeHolder="Phone Number"
        messageError={touched.phone_number ? errors.phone_number : undefined}
      />
      <SelectUikit
        placeHolder="Choose League"
        list={listSelectOption}
        onChange={(v) => {
          if (v) {
            setFieldValue("choose_league", v.id);
          }
        }}
        messageError={touched.choose_league ? errors.choose_league : undefined}
      />

      <ButtonSeconddary type="submit">
        <p>{loading ? "sending ..." : "Submit"}</p>
      </ButtonSeconddary>
    </form>
  );
};
