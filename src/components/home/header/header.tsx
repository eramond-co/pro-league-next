import classes from "./header.module.scss";

export const Header: React.FC = () => {
  return(
    <header className={classes.headerWrapper}>
      <div className={classes.header}>
        Header
      </div>
    </header>
  )
}