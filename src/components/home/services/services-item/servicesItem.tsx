import classes from "./servicesItem.module.scss";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface PropsDataType {
  image: string | StaticImageData;
  title: string;
  description: string;
  className?: string;
}

export const ServicesItem: React.FC<PropsDataType> = ({
  description,
  image,
  title,
  className,
}) => {
  return (
    <div className={`${classes.servicesItem} ${className}`}>
      <div className={classes.image}>
        <Image src={image || ""} alt={title} />
      </div>
      <p className={classes.title}>{title}</p>
      <p className={classes.explain}>{description}</p>
    </div>
  );
};
