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
      title: "Trikots",
      description:
        "Jedes Team verfügt über professionelle Heim- und Auswärtstrikots.",
      className: classes.kit,
      icon: <KitIcon />,
    },
    {
      id: "2",
      title: "Echtzeit-Ergebnisse",
      description:
        "Aktuelle Ergebnisse, Statistiken und alle wichtigen Infos – live und direkt.",
      className: classes.liveScore,
      icon: <LiveScoreIcon />,
    },
    {
      id: "3",
      title: "Live-Übertragung",
      description:
        "Erleben Sie jedes Spiel live im Internet – von überall aus.",
      className: classes.liveStream,
      icon: <CameraIcon />,
    },
  ];

  return (
    <div className={classes.services}>
      <h3 className={classes.title}>Dienstleistungen</h3>
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
