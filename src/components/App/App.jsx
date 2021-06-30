import React from "react";
import styles from "./App.module.css";
import Dropdown from "../Dropdown/Dropdown.jsx";

const App = () => {
  return (
    <div className={styles.wrap}>
      <Dropdown />
    </div>
  );
};

export default App;
