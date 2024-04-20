import Link from "next/link";
import classes from "./navbar.module.scss";

interface PropsDataType {
  className?: string;
}

export const NavBar: React.FC<PropsDataType> = ({className}) => {
  return (
    <div
      className={`${classes.navbarWrapper} ${className}`}
    >
      <div className={classes.navbar}>
        <Link href="/" className={classes.logoWrapper}>
          <div className={classes.logo}></div>
          <div className={classes.text}>
            <p>Pro League</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
