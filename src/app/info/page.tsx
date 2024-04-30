import { Header } from "@/components/home/header/header";
import classes from "./page.module.scss";
import { Footer } from "@/components/footer/footer";
import { NavBar } from "@/components/navbar/navbar";
import ScrollTop from "@/components/scroll-top/scrollTop";

const Info: React.FC = () => {
  return (
    <>
      <ScrollTop />
      <title>Socca Austria</title>
      <div className={classes.impressumWrapper}>
        <NavBar />
        <main className={classes.mainWrapper}>
          <div className={classes.main}>
            <div className={classes.title}>
              <h1>Socca Pro League:</h1>
            </div>
            <ul>
              <li>
                <p>
                  Start und Dauer: <br />
                  <br />
                  Die Liga beginnt in September 2024 und dauert 14 Spieltag.
                  Gespielt wird von September bis Ende Oktober und von Ende März
                  bis Ende Mai. <br />
                  <br />
                  Das Finalevent findet Mitte Juni statt (Nach dem Ende der
                  Regionalliga in Wien).
                  <br />
                  <br />
                  Modus:
                  <br />
                  <br />
                  Die Teams werden in zwei Gruppen zu je 8 Mannschaften
                  ausgelost. Am Ende der Saison kommen je 4 Mannschaften aus
                  jeder Liga ins Finalturnier. Bei diesem Event wird um das
                  Preisgeld gespielt
                  <br />
                  <br />
                  Zugelassen sind Spieler aller Spielklassen.
                  <br />
                  <br />
                  Die Mannschaften können maximal 25 Spieler während der Saison
                  anmelden.
                  <br />
                  <br />
                  Transferfenster ist außerhalb des Ligabetriebs.
                  <br />
                  <br />
                  Jedes Team erhält eine Garnitur Trikots. Die Trikots sind mit
                  dem Logo des Teams sowie Nummer ausgestattet. Der Platz für
                  den Sponsor des jeweiligen Teams wird freigehalten.
                  <br />
                  <br />
                  Die Kosten betragen einmalig 3.000 € und sind bei Ligaeintritt
                  zu bezahlen. Keine zusätzlichen Kosten, Anmeldegebühren oder
                  Sonstige Kosten.
                  <br />
                  <br />
                  Etwaige verhängte Strafen an die Mannschaften werden in einer
                  Gemeinschaftskasse im Sinne der Liga ausgegeben.
                  <br />
                  <br />
                </p>
              </li>
            </ul>
            <div className={classes.title}>
              <h1>Fans of Socca Liga:</h1>
            </div>
            <ul>
              <li>
                <p>
                  Start und Dauer:
                  <br />
                  <br />
                  Die Liga beginnt in September 2024 und dauert 26 Spieltag.
                  Gespielt wird von Anfang September bis Ende November und von
                  Ende Februar bis Ende Mai.
                  <br />
                  <br />
                  Das Finalevent findet Anfang Juni statt.
                  <br />
                  <br />
                  Modus:
                  <br />
                  <br />
                  Die Teams werden in zwei Gruppen zu je 16 Mannschaften
                  ausgelost. Am Ende der Saison kommen je 4 Mannschaften aus
                  jeder Liga ins Finalturnier. Die ersten drei Teams erhalten
                  Medaillen. Der Sieger erhält den Meisterpokal und eine
                  Garnitur Trikots nach Wahl.
                  <br />
                  <br />
                  Spieler aus der Regionalliga sowie höhere Spielklassen sind
                  nicht zugelassen.
                  <br />
                  <br />
                  Die Mannschaften können maximal 25 Spieler während der Saison
                  anmelden.
                  <br />
                  <br />
                  Transferfenster ist außerhalb des Ligabetriebs.
                  <br />
                  <br />
                  Jedes Team benötigt zwei Garnituren Trikots.
                  <br />
                  <br />
                  Die Kosten betragen 70€ pro Spiel und werden am Anfang der
                  Saison eingenommen. Keine zusätzlichen Kosten, Anmeldegebühren
                  oder Sonstige Kosten.
                  <br />
                  <br />
                  Etwaige verhängte Strafen an die Mannschaften werden in einer
                  Gemeinschaftskasse im Sinne der Liga ausgegeben.
                  <br />
                  <br />
                </p>
              </li>
            </ul>
            <div className={classes.title}>
              <h1>Senior League:</h1>
            </div>
            <ul>
              <li>
                <p>
                  Start und Dauer: <br />
                  <br />
                  Die Liga beginnt in September 2024 und dauert 22 Spieltag.
                  Gespielt wird von Anfang September bis Ende November und von
                  Ende Februar bis Ende Mai.
                  <br />
                  <br />
                  Es wird in Ligamodus gespielt. Kein Finalevent.
                  <br />
                  <br />
                  Modus:
                  <br />
                  <br />
                  Es gibt eine Liga mit maximal 12 Mannschaften. Die ersten drei
                  Teams erhalten Medaillen. Der Sieger erhält den Meisterpokal
                  und eine Garnitur Trikots nach Wahl.
                  <br />
                  <br />
                  Zugelassen sind alle Spieler, welche zum Stichtag 1. September
                  2024, 35 Jahre oder älter sind.
                  <br />
                  <br />
                  Die Mannschaften können maximal 25 Spieler während der Saison
                  anmelden.
                  <br />
                  <br />
                  Transferfenster ist außerhalb des Ligabetriebs.
                  <br />
                  <br />
                  Jedes Team benötigt zwei Garnituren Trikots.
                  <br />
                  <br />
                  Die Kosten betragen 70€ pro Spiel und werden am Anfang der
                  Saison eingenommen. Keine zusätzlichen Kosten, Anmeldegebühren
                  oder Sonstige Kosten.
                  <br />
                  <br />
                  Etwaige verhängte Strafen an die Mannschaften werden in einer
                  Gemeinschaftskasse im Sinne der Liga ausgegeben.
                  <br />
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Info;
