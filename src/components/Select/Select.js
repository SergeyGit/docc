import React, { useState, useRef, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import ChevronIcon from './icons/chevrondown.svg';
import styles from './select.module.css';

const Chip = ({ label, onRemove }) => {
  return (
    <div className={styles.chip}>
      {label}
      <button className={styles.chipRemove} onClick={onRemove} />
    </div>
  );
};

const SelectedOptions = ({ options, onRemove }) => {
  return options.map((option) => <Chip key={option} label={option} onRemove={onRemove(option)} />);
};

const Select = ({ options, selected, onSelect, name, placeholder, position = 'left' }) => {
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectOption = (value) => () => {
    const selectedValues = selected.includes(value)
      ? selected.filter((option) => option !== value)
      : [...selected, value];
    onSelect(selectedValues, name);
  };

  const filteredOptions = useMemo(() => {
    return options.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [options, filter]);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={clsx(styles.select, {
        [styles.active]: open,
      })}
      ref={selectRef}
    >
      <div className={styles.selectHead}>
        <SelectedOptions options={selected} onRemove={handleSelectOption} />
        <input
          type="text"
          className={clsx(styles.selectInput, {
            [styles.hidePlaceholder]: selected.length > 0,
          })}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
        />
      </div>
      <button
        className={clsx(styles.selectDButton, {
          [styles.active]: open,
        })}
        onClick={handleClick}
      >
        <ChevronIcon />
      </button>
      {open && (
        <div
          className={clsx(styles.dialog, {
            [styles.right]: position === 'right',
          })}
        >
          {selected.length > 0 && (
            <div className={styles.selectedOptions}>
              <SelectedOptions options={selected} onRemove={handleSelectOption} />
            </div>
          )}
          <div className={styles.optionsWrap}>
            {filteredOptions?.map((option, index) => (
              <div key={index} onClick={handleSelectOption(option)} className={styles.option}>
                <div
                  className={clsx(styles.checkBox, {
                    [styles.active]: selected.includes(option),
                  })}
                />
                <div>{option}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
