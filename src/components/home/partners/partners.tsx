import { StaticImageData } from "next/image";
import classes from "./partners.module.scss";
import { PartnersItem } from "./partners-item/partnersItem";

//images
import PartnersLogo1 from "@/assets/pics/partners/11-teamsports-chemnitz.png";
import PartnersLogo1Gray from "@/assets/pics/partners/11-teamsports-chemnitz-gray.png";
import PartnersLogo2 from "@/assets/pics/partners/asvo.png";
import PartnersLogo2Gray from "@/assets/pics/partners/asvo-gray.png";
import PartnersLogo3 from "@/assets/pics/partners/streamster_logo_verlauf.png";
import PartnersLogo3Gray from "@/assets/pics/partners/streamster_logo_verlauf-gray.png";
import PartnersLogo4 from "@/assets/pics/partners/westsidesoccerarena_logo.png";
import PartnersLogo4Gray from "@/assets/pics/partners/westsidesoccerarena_logo-gray.png";
import PartnersLogo5 from "@/assets/pics/partners/co-packing-solution.png";
import PartnersLogo5Gray from "@/assets/pics/partners/co-packing-solution-gray.png";

interface PartnersDataType {
  id: string;
  logo?: string | StaticImageData;
  backLogo?: string | StaticImageData;
  name?: string;
  link?: string;
}

export const Partners: React.FC = () => {
  const partners: PartnersDataType[] = [
    {
      id: "1",
      // name: "Logo",
      logo: PartnersLogo1,
      backLogo: PartnersLogo1Gray,
      link: "https://www.11teamsports.com/",
    },
    {
      id: "2",
      // name: "Logo",
      logo: PartnersLogo2,
      backLogo: PartnersLogo2Gray,
      link: "https://www.asvoe.at/",
    },
    {
      id: "3",
      // name: "Logo",
      logo: PartnersLogo3,
      backLogo: PartnersLogo3Gray,
      link: "https://streamster.tv/",
    },
    {
      id: "4",
      // name: "Logo",
      logo: PartnersLogo4,
      backLogo: PartnersLogo4Gray,
      link: "https://www.westsidesoccer.at/",
    },
    {
      id: "5",
      logo: PartnersLogo5,
      backLogo: PartnersLogo5Gray,
      link: "https://copackingsolutions.com/"
    },
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
            backLogo={partner.backLogo}
            link={partner.link}
          />
        ))}
      </div>
    </div>
  );
};
