import Link from "next/link";
import classes from "./footer.module.scss";
import {
  CopyRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/svgs/svgs";

interface SocialMediaDataType {
  id: string;
  icon: React.ReactNode;
  title: string;
  link: string;
}

export const Footer: React.FC = () => {
  const socialMedia: SocialMediaDataType[] = [
    {
      id: "1",
      title: "twitter",
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      id: "2",
      title: "instagram",
      icon: <InstagramIcon />,
      link: "/",
    },
    {
      id: "3",
      title: "facebook",
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      id: "4",
      title: "linkedin",
      icon: <LinkedinIcon />,
      link: "/",
    },
  ];

  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footer}>
        <div className={classes.body}>
          <div className={classes.title}>
            <Link href={"/"}>Pro League</Link>
          </div>
          <div className={classes.socialMedia}>
            <ul>
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={classes.icon}
                    title={item.title}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <div className={classes.text}>
            <CopyRightIcon />
            <span>2024 Pro League, all rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
