import { ButtonHTMLAttributes } from "react";
import classes from "./buttonSeconddary.module.scss";
import Link from "next/link";

interface PropsDataType {
  children: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  isLink?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  link?: string;
  className?: string;
}

export const ButtonSeconddary: React.FC<PropsDataType> = ({
  children,
  buttonProps,
  linkProps,
  isLink = false,
  className,
  type,
  link,
}) => {
  return isLink ? (
    <Link
      {...linkProps}
      href={link ? link : ""}
      className={`${classes.button} ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      {...buttonProps}
      type={type}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
};
