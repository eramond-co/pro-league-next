import React, { useEffect, useState } from "react";

import classes from "./count_down.module.scss";

interface IProps {
  targetDate: Date;
}

const CountDown: React.FC<IProps> = ({ targetDate }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = targetDate;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (s >= 0) {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return () => clearInterval(interval);
      }
    }, 1000);
  }, []);

  return (
    <div className={classes.counter_items}>
      <div className={classes.item}>
        <div className={classes.number}>
          {days.toString().length > 1
            ? days
                .toString()
                .split("")
                .map((v, i) => <p key={i}>{v}</p>)
            : days
                .toString()
                .split("")
                .map((v) => {
                  return (
                    <>
                      <p>{0}</p>
                      <p>{v}</p>
                    </>
                  );
                })}
        </div>
        <div className={classes.title}>
          <p>Tage</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.number}>
          {hours.toString().length > 1
            ? hours
                .toString()
                .split("")
                .map((v, i) => <p key={i}>{v}</p>)
            : hours
                .toString()
                .split("")
                .map((v) => {
                  return (
                    <>
                      <p>{0}</p>
                      <p>{v}</p>
                    </>
                  );
                })}
        </div>
        <div className={classes.title}>
          <p>Stunden</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.number}>
          {minutes.toString().length > 1
            ? minutes
                .toString()
                .split("")
                .map((v, i) => <p key={i}>{v}</p>)
            : minutes
                .toString()
                .split("")
                .map((v) => {
                  return (
                    <>
                      <p>{0}</p>
                      <p>{v}</p>
                    </>
                  );
                })}
        </div>
        <div className={classes.title}>
          <p>Minuten</p>
        </div>
      </div>
      {/* <div className={classes.item}>
        <div className={classes.number}>
          <p>{seconds}</p>
        </div>
        <div className={classes.title}>
          <p>Seconds</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;
