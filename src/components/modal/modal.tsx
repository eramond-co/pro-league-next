"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import style from "./modal.module.scss";
import { closeModal } from "@/store/slice/modal/modalReducer";

interface IProps {}

const Modal: React.FC<IProps> = () => {
  const modal = useAppSelector((s) => s.modal);

  const dispatch = useAppDispatch();

  const backdropClick = () => {
    dispatch(closeModal());
    
  };

  // console.log(modal);

  return (
    <>
      {modal.modalContent && modal.isOpen && (
        <div className={`${style.modalWrapper} `}>
          <div onClick={backdropClick} className={style.cover}></div>
          <div className={style.modal}>{modal.modalContent}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
