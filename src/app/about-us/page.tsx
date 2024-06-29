import Image from "next/image";
import classes from "./home.module.scss";
import member1 from "@/assets/pics/members/ali yilmaz.png";
import member2 from "@/assets/pics/members/lokman yilmaz.png";
import member3 from "@/assets/pics/members/nico niemann.png";
import { Footer } from "@/components/footer/footer";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className={classes.aboutUsWrapper}>
        <div className={classes.aboutUsPage}>
          <h1 className={classes.title}>About us</h1>
          <div className={classes.members}>
            <div className={classes.item}>
              <Image className={classes.image} src={member1} alt="Ali Yilmaz" />
              <div className={classes.info}>
                <p className={classes.name}>Ali Yilmaz</p>
                <p className={classes.sub}>Obmann</p>
                <p className={classes.description}>
                  Mit jahrelanger Erfahrung in der Kleinfeldliga lebe ich für
                  den Fußball. Mein tiefes Verständnis und meine Leidenschaft
                  für den Sport prägen meine Arbeit und mein Engagement. Ich
                  habe zahlreiche Herausforderungen gemeistert und stets das
                  Ziel verfolgt, immer das Beste zu machen. Mein Ziel ist es,
                  die Liga stetig erfolgreicher und spannender zu gestalten.
                  Fußball ist nicht nur ein Hobby für mich, sondern eine
                  Lebenseinstellung.
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <Image
                className={classes.image}
                src={member2}
                alt="Lokman Yilmaz"
              />
              <div className={classes.info}>
                <p className={classes.name}>Lokman Yilmaz</p>
                <p className={classes.sub}>Schiedsrichterbesetzer</p>
                <p className={classes.description}>
                  Mit einer langjährigen Leidenschaft für das
                  Schiedsrichterwesen bin ich tief im Fußball verwurzelt. Mein
                  umfangreiches Verständnis für den Sport prägt mein tägliches
                  Engagement. Durch die Überwindung zahlreicher
                  Herausforderungen strebe ich stets nach Höchstleistungen. Mein
                  Ziel ist es, die Schiedsrichter kontinuierlich zu fördern und
                  faire sowie spannende Spiele zu gewährleisten. Fußball
                  bedeutet für mich mehr als ein Hobby – es ist eine
                  Lebensphilosophie.
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <Image
                className={classes.image}
                src={member3}
                alt="Nico Niemann"
              />
              <div className={classes.info}>
                <p className={classes.name}>Nico Niemann</p>
                <p className={classes.sub}>Marketing</p>
                <p className={classes.description}>
                  Der Marketingexperte mit langjähriger Erfahrung im Bereich
                  Marketing übernimmt die strategische Planung und Durchführung
                  aller Marketingaktivitäten. Seine Fachkenntnisse erstrecken
                  sich auf die Entwicklung zielgerichteter Kampagnen zur
                  Steigerung der Markenbekanntheit und zur Förderung des
                  Ligawachstums. Er ist bekannt für seine Fähigkeit, effektive
                  Marketingstrategien zu entwerfen, die den Erfolg der Liga
                  nachhaltig unterstützen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
