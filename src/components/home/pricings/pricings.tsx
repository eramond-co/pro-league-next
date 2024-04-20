import PricingCard, { PricingCardProps } from "./pricing-card/pricingCard";
import classes from "./pricings.module.scss";
import { PremierLeague } from "@/svgs/pouriyaSvgs";
import card1 from "@/assets/pics/pricings/Frame 1000001553.jpg";
import card2 from "@/assets/pics/pricings/Frame 1000001556 (1).jpg";
import card3 from "@/assets/pics/pricings/Frame 1000001558.jpg";

const pricingData = [
  {
    image: card1,
    logo: <PremierLeague />,
    description: "Lorem ipsum is a placeholder text commonly used",
    entrance: "3000",
    reward: "15000",
  },
  {
    image: card2,
    logo: <PremierLeague />,
    description: "Lorem ipsum is a placeholder text commonly used",
    entrance: "1000",
    reward: "5000",
  },
  {
    image: card3,
    logo: <PremierLeague />,
    description: "Lorem ipsum is a placeholder text commonly used",
    entrance: "FREE",
    reward: "No Reward",
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
