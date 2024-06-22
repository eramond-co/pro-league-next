"use client";

import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";
import style from "./popup.module.scss";
import Image from "next/image";
import kit from "@/assets/pics/services/Teams-Single 1.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsSeen } from "@/store/slice/popup/popupReducer";

const Popup: React.FC = () => {
  const isSeen = useAppSelector((s) => s.persistedReducers.popupReducer.isSeen);

  const dispatch = useAppDispatch();

  return (
    <>
      {!isSeen && (
        <div className={style.main}>
          <div
            onClick={() => {
              dispatch(setIsSeen(true));
            }}
            className={style.backdrop}
          ></div>
          <div className={style.content}>
            <div className={style.img}>
              <Image alt="kit" src={kit} />
            </div>
            <div className={style.title}>Holt euch euer gratis Trikot-Set!</div>
            <div className={style.des}>
              Wenn sich dein Team bis zum <br />
              <h2>15. Juli</h2>
              für die <span>Pro-League</span>
              <br />
              anmeldet, erhält es kostenlos <span>zwei Trikotsätze.</span>
            </div>
            <div className={style.btn}>
              <ButtonSeconddary
                linkProps={{
                  onClick: () => {
                    dispatch(setIsSeen(true));
                  },
                }}
                isLink
                link="#register"
              >
                Anmelden
              </ButtonSeconddary>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
