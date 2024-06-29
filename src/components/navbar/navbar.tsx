"use client";

import Link from "next/link";
import classes from "./navbar.module.scss";
import { Logo } from "@/svgs/svgs";
import { usePathname } from "next/navigation";

interface PropsDataType {
  className?: string;
}

export const NavBar: React.FC<PropsDataType> = ({ className }) => {
  const items = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About us",
      url: "/about-us",
    },
  ];

  const pathName = usePathname();

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
        <div className={classes.linkList}>
          {items.map((i, index) => {
            return (
              <Link
                key={index}
                className={pathName == i.url ? classes.active : ""}
                href={i.url}
              >
                {i.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
