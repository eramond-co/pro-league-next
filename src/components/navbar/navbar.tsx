import Link from "next/link";
import classes from "./navbar.module.scss";
import { Logo } from "@/svgs/svgs";

interface PropsDataType {
  className?: string;
}

export const NavBar: React.FC<PropsDataType> = ({ className }) => {
  return (
    <div className={`${classes.navbarWrapper} ${className}`}>
      <div className={classes.navbar}>
        <Link href="/" className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>
          {/* <div className={classes.text}>
            <p>Socca Austria</p>
          </div> */}
        </Link>
      </div>
    </div>
  );
};
