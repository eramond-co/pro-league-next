import Link from "next/link";
import classes from "./footer.module.scss";
import {
  CallIcon,
  CopyRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  TwitterIcon,
} from "@/svgs/svgs";

interface SocialMediaDataType {
  id: string;
  icon: React.ReactNode;
  title: string;
  link: string;
}

interface NavbarListDataType {
  id: string;
  title: string;
  link?: string;
}

export const Footer: React.FC = () => {
  const socialMedia: SocialMediaDataType[] = [
    // {
    //   id: "1",
    //   title: "twitter",
    //   icon: <TwitterIcon />,
    //   link: "/",
    // },
    {
      id: "2",
      title: "instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/soccaaustria?igsh=cXZrczFia2Y5Mmpm",
    },
    {
      id: "3",
      title: "facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=61558530610998",
    },
    // {
    //   id: "4",
    //   title: "linkedin",
    //   icon: <LinkedinIcon />,
    //   link: "/",
    // },
    {
      id: "5",
      title: "tikTok",
      icon: <TikTokIcon />,
      link: "https://www.tiktok.com/@soccaaustria?_t=8llgwbu0Ogq&_r=1",
    },
  ];

  const listFooternav: NavbarListDataType[] = [
    {
      id: "1",
      title: "Datenschutz",
      // link: ""
    },
    {
      id: "2",
      title: "Impressum",
      link: "/impressum",
    },
  ];

  const listInforamtion = [
    {
      id: "1",
      icon: <CallIcon />,
      text: "+43 660 109 4900",
    },
  ];

  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footer}>
        <div className={classes.body}>
          <div className={classes.leftItem}>
            <div className={classes.title}>
              <Link href={"/"}>Socca Austria</Link>
            </div>
            <div className={classes.socialMedia}>
              <ul>
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={classes.icon}
                      title={item.title}
                      target="_blank"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classes.information}>
              <ul>
                {listInforamtion.map((info) => (
                  <li key={info.id}>
                    <div className={classes.icon}>{info.icon}</div>
                    <p>{info.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.list}>
            <ul>
              {listFooternav.map((link) => (
                <li key={link.id}>
                  {link.link ? (
                    <Link href={link.link}>{link.title}</Link>
                  ) : (
                    <p>{link.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <div className={classes.text}>
            <span>&#169;</span> 2024 Socca Austria , Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};
