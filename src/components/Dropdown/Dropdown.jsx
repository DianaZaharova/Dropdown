import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const mocks = [
    {
      id: 0,
      text: "Normal",
    },
    {
      id: 1,
      text: "Длинное название пункта",
    },
    {
      id: 2,
      text: "Длинное название пункта, которое занимает сразу несколько строк",
    },
    {
      id: 3,
      text: "Еще более длинное название пункта, которое занимает сразу несколько строк",
    },
  ];

  return (
    <div className={styles.wrap}>
      <button
        className={styles.button}
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
      >
        Дропдаун
        <svg
          className={styles.icon}
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.706206 2.41374L3.29621 5.00374C3.68621 5.39374 4.31621 5.39374 4.70621 5.00374L7.29621 2.41374C7.92621 1.78374 7.47621 0.703735 6.58621 0.703735H1.40621C0.516206 0.703735 0.0762062 1.78374 0.706206 2.41374Z"
            fill="#212122"
          />
        </svg>
      </button>
      {dropdownIsOpen && (
        <ul className={styles.list}>
          {mocks.map((item) => (
            <li key={item.id} className={styles.item}>
              <input
                className={styles.input}
                type="checkbox"
                name={item.id}
                id={item.id}
              />
              <label className={styles["label"]} htmlFor={item.id}>
                {item.text}
                <svg
                  className={styles["label-icon"]}
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.32915 9.22918L1.43749 6.33751C1.28179 6.18146 1.07042 6.09377 0.849988 6.09377C0.629556 6.09377 0.418181 6.18146 0.262488 6.33751C-0.0625122 6.66251 -0.0625122 7.18751 0.262488 7.51251L3.74582 10.9958C4.07082 11.3208 4.59582 11.3208 4.92082 10.9958L13.7375 2.17917C14.0625 1.85417 14.0625 1.32917 13.7375 1.00418C13.5818 0.848131 13.3704 0.760437 13.15 0.760437C12.9296 0.760437 12.7182 0.848131 12.5625 1.00418L4.32915 9.22918Z"
                    fill="#5C6773"
                  />
                </svg>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
