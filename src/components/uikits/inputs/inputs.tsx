"use client";

import {
  HTMLAttributes,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import classes from "./inputs.module.scss";

//input-default

interface InputDefaultPropsDataType {
  placeHolder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  messageError?: string;
  className?: string;
}

export const InputDefaultUikit: React.FC<InputDefaultPropsDataType> = ({
  placeHolder,
  inputProps,
  className,
  label,
  messageError,
}) => {
  return (
    <div
      className={`${classes.inputDefaultWrapper} ${
        messageError ? classes.error : ""
      } ${className}`}
    >
      <div className={classes.inputDefault}>
        <label>
          {label && <span>{label}</span>}
          <input {...inputProps} placeholder={placeHolder ? placeHolder : ""} />
        </label>
        {messageError && <span className={classes.error}>{messageError}</span>}
      </div>
    </div>
  );
};

//input-number

import AustriaFlag from "@/assets/pics/flags/Austria.svg";
import { ArrowDownIcon, SearchIcon } from "@/svgs/svgs";
import Image, { StaticImageData } from "next/image";

interface CountryListDataType {
  id: number | string;
  flag?: StaticImageData;
  name: string;
  code: string;
}

interface PhoneNumber extends InputDefaultPropsDataType {
  onChange: (value: any) => any;
}

export const InputNumberUikit: React.FC<PhoneNumber> = ({
  placeHolder,
  inputProps,
  label,
  className,
  messageError,
  onChange,
}) => {
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [choosedCountry, setChoosedCountry] =
    useState<CountryListDataType | null>(null);
  const [toggleCountrylist, setToggleCountryList] = useState<boolean>(false);

  const countrylist: CountryListDataType[] = [
    {
      id: 1,
      flag: AustriaFlag,
      name: "Astria",
      code: "+49",
    },
    {
      id: 2,
      flag: AustriaFlag,
      name: "Iran",
      code: "+98",
    },
    {
      id: 3,
      flag: AustriaFlag,
      name: "USA",
      code: "+1",
    },
    {
      id: 4,
      flag: AustriaFlag,
      name: "USA",
      code: "+10",
    },
    {
      id: 5,
      flag: AustriaFlag,
      name: "USA",
      code: "+555",
    },
  ];

  const [valueInput, setValueInput] = useState<string>("");

  const [filterCountryList, setFilterCountryList] = useState<
    CountryListDataType[]
  >([]);

  useEffect(() => {
    setChoosedCountry(countrylist[0]);
    setFilterCountryList(countrylist);
  }, []);

  //search-filter
  const filterListinCountryList = (value: string) => {
    if (value !== "") {
      setFilterCountryList([]);
      let filteredList = [];
      let inputValue = value.toLowerCase();
      countrylist.forEach((country) => {
        if (country.name.toLowerCase().indexOf(inputValue) > -1) {
          filteredList.push(country);
          setFilterCountryList(filteredList);
        }
      });
    } else {
      setFilterCountryList(countrylist);
    }
  };

  const [value, setValue] = useState<string>();
  const defaultOnChangeHandler = (value: string) => {
    const cleaned = value.replace(/\D/g, "").replace(/^0/gm, "");
    const match = [
      cleaned.substring(0, 3),
      cleaned.substring(3, 6),
      cleaned.substring(6, 10),
    ];
    setValue(
      `${match[0]} ${match[1]} ${match[2]}`
        .replace(/\s\s/gi, " ")
        .replace(/\s$/gm, "")
    );
    return `${match[0]} ${match[1]} ${match[2]}`.replace(/\s/gm, "");
  };

  useEffect(() => {
    if (valueInput) {
      let text = choosedCountry?.code + valueInput;
      onChange(text.replaceAll(" ", ""));
    }
  }, [valueInput, choosedCountry]);

  return (
    <button
      onBlur={(e) => {
        e.stopPropagation();
        setToggleCountryList(false);
      }}
      type="button"
      className={`${classes.inputNumberWrapper} ${
        messageError ? classes.error : ""
      }
      ${focusInput ? classes.focus : ""} ${className}
      `}
    >
      <div className={classes.inputNumber}>
        <div className={classes.listCountries}>
          <div
            className={classes.choosedCountry}
            onClick={(e) => {
              setToggleCountryList((state) => !state);
            }}
          >
            {choosedCountry?.flag && (
              <div className={classes.flag}>
                <Image src={choosedCountry.flag} alt={choosedCountry.name} />
              </div>
            )}
            <div className={classes.code}>
              <p>{choosedCountry?.code}</p>
            </div>
            <div className={classes.icon}>
              <ArrowDownIcon />
            </div>
          </div>

          <div
            className={`${classes.list} ${
              toggleCountrylist ? classes.active : ""
            }`}
          >
            <div className={classes.header}>
              <div className={classes.searchBox}>
                <div className={classes.icon}>
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search Country"
                  onFocus={() => {
                    setToggleCountryList(true);
                  }}
                  onInput={(e: any) => filterListinCountryList(e.target.value)}
                />
              </div>
            </div>
            <ul className={classes.body}>
              {filterCountryList.length > 0 ? (
                filterCountryList.map((country) => (
                  <li
                    key={country.id}
                    onClick={() => {
                      setChoosedCountry(country);
                      setToggleCountryList(false);
                    }}
                    className={
                      country.id === choosedCountry?.id ? classes.selected : ""
                    }
                  >
                    {country.flag && (
                      <div className={classes.flag}>
                        <Image src={country.flag} alt={country.name} />
                      </div>
                    )}
                    <div className={classes.text}>
                      <p>{`${country.name} (${country.code})`}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p className={classes.emptyList}>No countries found.</p>
              )}
            </ul>
          </div>
        </div>
        <label>
          {label && <span>{label}</span>}
          <input
            {...inputProps}
            placeholder={placeHolder ? placeHolder : ""}
            onBlur={() => setFocusInput((state) => !state)}
            onFocus={() => setFocusInput((state) => !state)}
            value={value}
            onChange={(e: any) => {
              defaultOnChangeHandler(e.target.value);
              setValueInput(e.target.value);
            }}
          />
        </label>
      </div>
      {messageError && <span className={classes.error}>{messageError}</span>}
    </button>
  );
};
