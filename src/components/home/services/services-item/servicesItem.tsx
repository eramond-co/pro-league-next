import classes from "./servicesItem.module.scss";

interface PropsDataType {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const ServicesItem: React.FC<PropsDataType> = ({description,icon,title,className}) => {
  return (
    <div className={classes.servicesItem}>
      <div className={`${classes.icon} ${className}`}>
        {icon}
      </div>
      <p className={classes.title}>{title}</p>
      <p className={classes.explain}>{description}</p>
    </div>
  );
};
