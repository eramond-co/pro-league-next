import Image, { StaticImageData } from "next/image";
import classes from "./partnersItem.module.scss";

interface PropsDataType {
  logo?: string | StaticImageData;
  name?: string;
}

export const PartnersItem: React.FC<PropsDataType> = ({ name, logo }) => {
  return (
    <div className={classes.partnersItem}>
      <div className={`${classes.logo} ${!logo ? classes.transparent : ""}`}>
        {logo && <Image src={logo} alt={name ? name : ""} />}
      </div>
      <div className={classes.name}>
        <p>{name}</p>
      </div>
    </div>
  );
};
