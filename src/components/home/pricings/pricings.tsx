import PricingCard, { PricingCardProps } from "./pricing-card/pricingCard";
import classes from "./pricings.module.scss";
import { PremierLeague } from "@/svgs/pouriyaSvgs";
import card1 from "@/assets/pics/pricings/Frame 1000001553.jpg";
import card2 from "@/assets/pics/pricings/Frame 1000001556 (1).jpg";
import card3 from "@/assets/pics/pricings/Frame 1000001558.jpg";

const pricingData = [
  {
    image: card1,
    logo: "Pro League",
    description: "In der Socca Pro League erstrahlt Fußball in neuem Glanz!",
    entrance: "3000",
    reward: "15000€",
  },
  {
    image: card2,
    logo: "Fans of Socca League",
    description: "In unserer Hobbyliga ist Spiel und Spaß garantiert!",
    entrance: "70€/Spiel",
    reward: "Pokal und Medaillen",
  },
  {
    image: card3,
    logo: "Senior League",
    description: "Fußballgenuss für Über-35-Jährige!",
    entrance: "FREE",
    reward: "Coming soon",
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
          />
        );
      })}
    </div>
  );
};

export default Pricings;
