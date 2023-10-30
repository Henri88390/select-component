import { useEffect, useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
  options: HTMLOptionElement[];
  onChange: (option?: HTMLOptionElement) => void;
  value?: string;
};

export const Select = ({ options, onChange, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const clearOptions = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onChange(undefined);
  };

  const selectOption = (option: HTMLOptionElement) => {
    if (value !== option.value) {
      onChange(option);
    }
  };

  const handleSelectOption = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: HTMLOptionElement
  ) => {
    event.stopPropagation();
    selectOption(option);
  };

  const isOptionSelected = (option: HTMLOptionElement) => {
    return option.value === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.value}>{value}</span>
      <button className={styles["clear-btn"]} onClick={(e) => clearOptions(e)}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul
        className={`${styles.options} ${isOpen ? styles["options-show"] : ""}`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles["option-selected"] : ""
            } ${
              index === highlightedIndex ? styles["option-highlighted"] : ""
            }`}
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => handleSelectOption(e, option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
