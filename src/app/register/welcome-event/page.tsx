"use client";

import { NavBar } from "@/components/navbar/navbar";
import style from "./welcomeEvent.module.scss";
import { JoinOurLeague } from "@/components/home/join-our-league/joinOurLeague";
import { CalendarIcon, CoinIcon, LocationIcon } from "@/svgs/sepehrSvgs";
import { Footer } from "@/components/footer/footer";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

const WelcomeEvent: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className={style.main}>
        <JoinOurLeague />
        <div className={style.detail}>
          <div className={style.section}>
            <div className={style.title}>
              ISF Champions League (Qualifikation)
            </div>
            <div className={style.superTitle}>
              SOCCA AUSTRIA <span className={style.title}>Welcome Event</span>
            </div>
            <div className={style.des}>
              Seid dabei und erlebt ein unvergessliches Fußball-Event!
            </div>
          </div>
          <div className={style.section}>
            <div className={style.title}>
              Hier erhaltet ihr alle wichtigen Informationen{" "}
            </div>
            <ul>
              <div className={style.des}>
                <CalendarIcon />
                <span> Datum: Sonntag, 8. September 2024</span>
              </div>
              <div className={style.des}>
                <LocationIcon /> <span>Ort: Sportplatz SV Donau </span>
              </div>
              <div className={style.des}>
                <CoinIcon />
                <span> Teilnahmegebühr: 120€</span>{" "}
              </div>
            </ul>
          </div>
          <div className={style.section}>
            <div className={style.title}>Was gibt es zu gewinnen? </div>
            <div className={style.des}>
              Der Sieger qualifiziert sich für die prestigeträchtige ISF
              Champions League in Griechenland! SOCCA AUSTRIA übernimmt die
              Nenngebühr, sodass ihr nur für die Reise- und Aufenthaltskosten
              aufkommen müsst. Die Kosten für Unterkunft und Verpflegung
              belaufen sich auf nur 260€ pro Person.{" "}
            </div>
          </div>
          <div className={style.section}>
            <div className={style.title}>Warum teilnehmen? </div>
            <ul>
              <li>
                <div className={style.des}>
                  Keine Teilnahmegebühr: Teams, die sich für die SOCCA AUSTRIA
                  Kleinfeld Liga angemeldet haben, müssen kein Nenngeld zahlen.
                  Entscheidet ihr euch während des Events, an der Liga
                  teilzunehmen, wird euch die Teilnahmegebühr für die Liga
                  gutgeschrieben!{" "}
                </div>
              </li>
              <li>
                <div className={style.des}>
                  Einzigartige Gelegenheit: Nutzt die Chance, euch mit den
                  Besten zu messen und euer Können unter Beweis zu stellen.{" "}
                </div>
              </li>
              <li>
                <div className={style.des}>
                  Gemeinschaft & Teamgeist: Stärkt euren Teamzusammenhalt und
                  knüpft neue Kontakte in der Fußball-Community.{" "}
                </div>
              </li>
            </ul>
            <br />
            <div className={style.des}>
              Meldet euch schnell an und sichert euch euren Platz in diesem
              einzigartigen Turnier! Zeigt, was in euch steckt und werdet Teil
              eines aufregenden Fußballerlebnisses! Jetzt anmelden und
              durchstarten!{" "}
            </div>
          </div>
          {/* <div className={style.section}> */}
          <ButtonSeconddary isLink link="#register" className={style.btn}>
            Anmelden
          </ButtonSeconddary>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomeEvent;
