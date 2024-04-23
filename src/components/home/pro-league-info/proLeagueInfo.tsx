import classes from "./proLeagueInfo.module.scss";

const ProLeagueInfo: React.FC = () => {
  return (
    <div className={classes.proLeagueInfo}>
      <h3 className={classes.title}>Pro League</h3>
      <p className={classes.explain}>
        Die Soccer Pro League ist der neue Stern am Fußballhimmel. Mit einem
        Preisgeld von 15.000 Euro für das Gewinnerteam am Ende der Saison,
        setzen wir neue Maßstäbe im Amateurfußball. Unsere Spiele zeichnen sich
        durch professionelle Schiedsrichter und eine gut organisierte Struktur
        aus, die jedem Match einen professionellen Rahmen verleiht. Verpassen
        Sie keine Sekunde und seien Sie live dabei, wenn die Spiele live
        gestreamt werden. Unterstützen Sie Ihre Mannschaft und erleben Sie, wie
        aus lokalen Helden Legenden werden.
      </p>
    </div>
  );
};

export default ProLeagueInfo;
