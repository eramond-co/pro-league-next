import style from "./style.module.scss";

export const YoutubeVideo = () => {
  return (
    <section className={style.youtubeVideoSection}>
      <div className={style.videoSection}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/boBl9KNfxis?si=xJpGyEAjr4Df3gDR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={style.video}
        />
      </div>
      <div className={style.contentSection}>
        <h3 className={style.title}>SOCCA PRO LEAGUE </h3>
        <p className={style.text}>
          Die Liga startet in September 2024 und nimmt lediglich 10 Teams auf.
          Jedes Team wird mit zwei Garnituren Trikots inklusive Druck und freier
          Modell und Farbwahl ausgestattet.
          <br />
          Alle Spiele der Pro League werden Livegestreamt. Komplette Statistik
          aller Mannschaften und Spieler sowie Livescore und Berichterstattung
          gehören zum Basisprogramm.
        </p>
      </div>
    </section>
  );
};
