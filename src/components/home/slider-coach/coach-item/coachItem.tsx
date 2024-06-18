import Image, { StaticImageData } from "next/image";
import classes from "./coachItem.module.scss";

interface CoachItemPropsDataType {
  image: string | StaticImageData;
  name: string;
  description: string;
}

export const CoachItem: React.FC<CoachItemPropsDataType> = ({
  description,
  image,
  name,
}) => {
  return (
    <div className={classes.coachItem}>
      <div className={classes.coachInformation}>
        <div className={classes.image}>
          {image && <Image src={image} alt={name} />}
        </div>
      </div>
      <div className={classes.description}>
        <p className={classes.name}>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
