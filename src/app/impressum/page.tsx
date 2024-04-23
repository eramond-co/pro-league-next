import { Header } from "@/components/home/header/header";
import classes from "./page.module.scss";
import { Footer } from "@/components/footer/footer";
import { NavBar } from "@/components/navbar/navbar";

const Impressum: React.FC = () => {
  const impressumList = [
    {
      id: "1",
      title: "Österreichischer Breitensportverband",
    },
    {
      id: "2",
      title: "Nussbaumallee 24",
    },
    {
      id: "3",
      title: "1110 Wien",
    },
    {
      id: "4",
      title: "(In Gründung)",
    },
    {
      id: "5",
      title: "Verantwortlich für den Inhalt: Ali Yilmaz",
    },
  ];

  return (
    <div className={classes.impressumWrapper}>
      <NavBar />
      <main className={classes.mainWrapper}>
        <div className={classes.main}>
          <div className={classes.title}>
            <h1>Impressum</h1>
          </div>
          <ul>
            {impressumList.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
