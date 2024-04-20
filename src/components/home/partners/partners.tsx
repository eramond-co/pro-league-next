import { StaticImageData } from "next/image";
import classes from "./partners.module.scss";
import { PartnersItem } from "./partners-item/partnersItem";

interface PartnersDataType {
  id: string;
  logo?: string | StaticImageData;
  name: string;
}

export const Partners: React.FC = () => {
  const partners: PartnersDataType[] = [
    {
      id: "1",
      name: "Logo",
    },
    {
      id: "2",
      name: "Logo",
    },
    {
      id: "3",
      name: "Logo",
    },
    {
      id: "4",
      name: "Logo",
    },
    {
      id: "5",
      name: "Logo",
    },
  ];

  return (
    <div className={classes.partners}>
      <div className={classes.title}>
        <h3>Partners</h3>
      </div>
      <div className={classes.items}>
          {partners.map((partner) => (
            <PartnersItem key={partner.id} name={partner.name} />
          ))}
      </div>
    </div>
  );
};
