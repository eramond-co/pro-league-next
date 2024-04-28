import Image, { StaticImageData } from "next/image";
import classes from "./partnersItem.module.scss";
import Link from "next/link";

interface PropsDataType {
  logo?: string | StaticImageData;
  name?: string;
  link?: string;
  backLogo?: string | StaticImageData;
}

export const PartnersItem: React.FC<PropsDataType> = ({
  name,
  logo,
  link,
  backLogo,
}) => {
  return (
    <Link href={link ? link : ""} className={classes.partnersItem} target="_blank">
      <div className={`${classes.logo} ${!logo ? classes.transparent : ""}`}>
        {logo && <Image src={logo} alt={name ? name : ""} />}
        {backLogo && <Image className={classes.backLogo} src={backLogo} alt={name ? name : ""} />}
      </div>
      {name && (
        <div className={classes.name}>
          <p>{name}</p>
        </div>
      )}
    </Link>
  );
};
