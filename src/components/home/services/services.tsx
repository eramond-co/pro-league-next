import { ServicesItem } from "./services-item/servicesItem";
import classes from "./services.module.scss";
import { KitIcon, LiveScoreIcon, CameraIcon } from "@/svgs/svgs";

interface ServicesDataType {
  id: string;
  title: string;
  description: string;
  className: string;
  icon: React.ReactNode;
}

const HomeServices: React.FC = () => {
  const services: ServicesDataType[] = [
    {
      id: "1",
      title: "Kit",
      description:
        "Upgrade your team's look with our kits, designed for performance and style.",
      className: classes.kit,
      icon: <KitIcon />,
    },
    {
      id: "2",
      title: "Live Score",
      description:
        "Get instant updates on goals, assists, and match statistics as they happen.",
      className: classes.liveScore,
      icon: <LiveScoreIcon />,
    },
    {
      id: "3",
      title: "Live Stream",
      description:
        "Watch the action unfold in real-time with our live streaming service.",
      className: classes.liveStream,
      icon: <CameraIcon />,
    },
  ];

  return (
    <div className={classes.services}>
      <h3 className={classes.title}>Services</h3>
      <div className={classes.container}>
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            icon={service.icon}
            title={service.title}
            className={service.className}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
