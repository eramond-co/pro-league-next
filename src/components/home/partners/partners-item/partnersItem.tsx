import Image, { StaticImageData } from "next/image";
import classes from "./partnersItem.module.scss";
import Link from "next/link";

interface PropsDataType {
  logo?: string | StaticImageData;
  name?: string;
  link?: string;
}

export const PartnersItem: React.FC<PropsDataType> = ({ name, logo , link}) => {
  return (
    <Link href={link? link : ""} className={classes.partnersItem}>
      <div className={`${classes.logo} ${!logo ? classes.transparent : ""}`}>
        {logo && <Image src={logo} alt={name ? name : ""} />}
      </div>
      {name && (
        <div className={classes.name}>
          <p>{name}</p>
        </div>
      )}
    </Link>
  );
};
