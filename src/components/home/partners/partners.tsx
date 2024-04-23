import { StaticImageData } from "next/image";
import classes from "./partners.module.scss";
import { PartnersItem } from "./partners-item/partnersItem";

//images
import PartnersLogo1 from "@/assets/pics/partners/11-teamsports-chemnitz.png";
import PartnersLogo2 from "@/assets/pics/partners/asvo.png";
import PartnersLogo3 from "@/assets/pics/partners/streamster_logo_verlauf.png";
import PartnersLogo4 from "@/assets/pics/partners/westsidesoccerarena_logo.png";

interface PartnersDataType {
  id: string;
  logo?: string | StaticImageData;
  name?: string;
  link?: string;
}

export const Partners: React.FC = () => {
  const partners: PartnersDataType[] = [
    {
      id: "1",
      // name: "Logo",
      logo: PartnersLogo1,
      link: "https://www.11teamsports.com/",
    },
    {
      id: "2",
      // name: "Logo",
      logo: PartnersLogo2,
      link: "https://www.asvoe.at/",
    },
    {
      id: "3",
      // name: "Logo",
      logo: PartnersLogo3,
      link: "https://streamster.tv/",
    },
    {
      id: "4",
      // name: "Logo",
      logo: PartnersLogo4,
      link: "https://www.westsidesoccer.at/",
    },
    // {
    //   id: "5",
    //   name: "Logo",
    // },
  ];

  return (
    <div className={classes.partners}>
      <div className={classes.title}>
        <h3>Partner</h3>
      </div>
      <div className={classes.items}>
        {partners.map((partner) => (
          <PartnersItem
            key={partner.id}
            name={partner.name}
            logo={partner.logo}
            link={partner.link}
          />
        ))}
      </div>
    </div>
  );
};
