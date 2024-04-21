import { SelectHTMLAttributes, useState } from "react";
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
}

export const SelectUikit: React.FC<PropsDataType> = ({
  label,
  placeHolder,
  list,
}) => {
  const [choosedItem, setChoosedItem] = useState<string | null>(null);
  const [openList, setOpenList] = useState<boolean>(false);

  return (
    <div className={classes.selectUiki}>
      <div className={classes.label}>
        <p>{label}</p>
      </div>
      <div
        className={`${classes.choosedItem} ${
          !choosedItem ? classes.default : ""
        } ${openList ? classes.active : ""}`}
        onClick={() => {
          setOpenList((state) => !state);
        }}
      >
        <p>{choosedItem ? choosedItem : placeHolder}</p>
        <div className={classes.icon}>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={`${classes.list} ${openList ? classes.active : ""}`}>
        <ul>
          {list ? (
            list?.map((item: ListSelectBoxType) => (
              <li key={item.id} onClick={() => setChoosedItem(item.title)}>
                <p>{item.title}</p>
              </li>
            ))
          ) : (
            <p>List is Empty</p>
          )}
        </ul>
      </div>
    </div>
  );
};
