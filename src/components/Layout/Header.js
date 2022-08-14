import React, { Fragment } from "react";

import styles from "./Header.module.css";
import mealImg from "../../assets/meal-pic.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Healthy meals for You!</h1>
        <HeaderButton onCustClick={props.onShow}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImg} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
