import PricingCard, { PricingCardProps } from "./pricing-card/pricingCard";
import classes from "./pricings.module.scss";
import { PremierLeague } from "@/svgs/pouriyaSvgs";
import card1 from "@/assets/pics/pricings/Frame 1000001553.png";
import card2 from "@/assets/pics/pricings/Frame 1000001558.png";
import card3 from "@/assets/pics/pricings/Frame 1000001556 (1).png";
import { title } from "process";

const pricingData = [
  {
    image: card1,
    logo: "Pro League",
    description: "In der Socca Pro League erstrahlt Fußball in neuem Glanz!",
    entrance: "3000€",
    reward: "15000€",
    items: [
      "Zwei Garnituren Trikots für alle Teilnehmer",
      "Livestream aller Spiele",
      "Komplette Statistik aller Spieler und Mannschaften",
      "Professionelle Schiedsrichter",
      " Pokal und Medaillen",
      "15.000 € Preisgeld",
      "Spielmodus 5+1",
    ],
  },
  {
    image: card2,
    logo: "Fans of Socca League",
    description: "In unserer Hobbyliga ist Spiel und Spaß garantiert!",
    entrance: "70€/Spiel",
    reward: "Pokale, Medaillen und Trikots",
    items: [
      "Livestream ausgewählter Spiele",
      "Ganzjahresliga",
      "Komplette Statistik aller Spieler und Mannschaften",
      "Professionelle Schiedsrichter",
      "Pokal und Medaillen",
      "Spielmodus 5+1",
    ],
  },
  {
    image: card3,
    logo: "Senior League",
    description: "Fußballgenuss für Über-35-Jährige!",
    entrance: "FREE",
    reward: "Coming soon",
    items: [
      "Livestream ausgewählter Spiele",
      "Ganzjahresliga",
      "Komplette Statistik aller Spieler und   Mannschaften",
      "Professionelle Schiedsrichter",
      "Pokal und Medaillen",
      "Spielmodus 5+1",
    ],
  },
];

const Pricings: React.FC = () => {
  return (
    <div className={classes.pricingsContainer}>
      {pricingData.map((item: PricingCardProps, index: number) => {
        return (
          <PricingCard
            key={index}
            image={item.image}
            logo={item.logo}
            description={item.description}
            entrance={item.entrance}
            reward={item.reward}
            items={item.items}
          />
        );
      })}
    </div>
  );
};

export default Pricings;
