import { ButtonHTMLAttributes } from "react";
import classes from "./buttonSeconddary.module.scss";
import Link from "next/link";

interface PropsDataType {
  children: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  isLink?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  link?: string;
}

export const ButtonSeconddary: React.FC<PropsDataType> = ({
  children,
  buttonProps,
  isLink = false,
  type,
  link,
}) => {
  return isLink ? (
    <Link href={link ? link : ""} className={classes.button}>
      {children}
    </Link>
  ) : (
    <button {...buttonProps} type={type} className={classes.button}>
      {children}
    </button>
  );
};
