import { ServicesItem } from "./services-item/servicesItem";
import classes from "./services.module.scss";
import { KitIcon, LiveScoreIcon, CameraIcon } from "@/svgs/svgs";
import { StaticImageData } from "next/image";
import services1 from "@/assets/pics/services/Teams-Single 1.png";
import services2 from "@/assets/pics/services/Teams-Single 1 (1).png";
import services3 from "@/assets/pics/services/Teams-Single 1 (2).png";

interface ServicesDataType {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  className?: string;
}

const HomeServices: React.FC = () => {
  const services: ServicesDataType[] = [
    {
      id: "1",
      title: "Trikots",
      description:
        "Jedes Team bekommt von der Liga professionelle Trikotausrüstung.",
      className: classes.kit,
      image: services1,
    },
    {
      id: "2",
      title: "Echtzeit-Ergebnisse",
      description:
        "Aktuelle Ergebnisse, Statistiken und alle wichtigen Infos – live und direkt.",
      className: classes.liveScore,
      image: services2,
    },
    {
      id: "3",
      title: "Live-Übertragung",
      description:
        "Erleben Sie jedes Spiel live im Internet – von überall aus.",
      className: classes.liveStream,
      image: services3,
    },
  ];

  return (
    <div className={classes.services}>
      <h3 className={classes.title}>Dienstleistungen</h3>
      <div className={classes.container}>
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            image={service.image}
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
