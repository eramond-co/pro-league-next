import { SelectHTMLAttributes, useEffect, useState } from "react";
import classes from "./selectBox.module.scss";
import { ArrowDownIcon } from "@/svgs/bradSvgs";

interface ListSelectBoxType {
  title: string;
  id: string;
}

interface PropsDataType {
  placeHolder?: string;
  label?: string;
  list?: ListSelectBoxType[];
  onChange?: (value: any) => any;
  messageError?: string;
}

export const SelectUikit: React.FC<PropsDataType> = ({
  label,
  placeHolder,
  list,
  onChange,
  messageError,
}) => {
  const [choosedItem, setChoosedItem] = useState<ListSelectBoxType | null>(
    null
  );
  const [openList, setOpenList] = useState<boolean>(false);

  useEffect(() => {
    if (onChange) onChange(choosedItem);
  }, [choosedItem]);

  return (
    <button
      className={`${classes.selectUiki} ${openList ? classes.active : ""} ${
        messageError ? classes.error : ""
      }`}
      type="button"
      onBlur={(e) => {
        e.stopPropagation();
        setOpenList(false);
      }}
    >
      <div className={classes.label}>
        <p>{label}</p>
      </div>
      <div
        className={`${classes.choosedItem} ${
          !choosedItem ? classes.default : ""
        }`}
        onClick={() => {
          setOpenList((state) => !state);
        }}
      >
        <p>{choosedItem?.title ? choosedItem.title : placeHolder}</p>
        <div className={classes.icon}>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={`${classes.list}`}>
        <ul>
          {list ? (
            list?.map((item: ListSelectBoxType) => (
              <li
                key={item.id}
                onClick={() => {
                  setChoosedItem(item);
                  setOpenList((state) => !state);
                }}
                className={
                  item.title.toLowerCase() === choosedItem?.title.toLowerCase()
                    ? classes.selected
                    : ""
                }
              >
                <p>{item.title}</p>
              </li>
            ))
          ) : (
            <p className={classes.empty}>List is Empty</p>
          )}
        </ul>
      </div>

      {messageError && <span className={classes.error}>{messageError}</span>}
    </button>
  );
};
