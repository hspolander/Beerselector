import React, { useState } from 'react';
import PropTypes from 'prop-types';

import searchDark from '../../img/search.png';
import './inputTextfieldSearch.scss';

const InputTextfieldSearch = ({ onSubmit, ...props }) => {
  const [inputtext, setInputText] = useState('');
  const [searchtype, setSearchType] = useState({
    display: 'Namn',
    value: 'name',
  });
  const inputRef = React.createRef();
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSubmit({ value: e.target.value, searchType: searchtype.value });
    }
  };
  const handleDropdownChange = ({ options, selectedIndex, value }) => {
    setSearchType({
      display: options[selectedIndex].innerText,
      value,
    });
  };
  return (
    <div className="textfieldWrapper">
      <select onChange={e => handleDropdownChange(e.target)}>
        <option defaultValue value="name">
          Namn
        </option>
        <option value="Country">Land</option>
        <option value="Style">Stil</option>
      </select>
      <input
        value={inputtext}
        ref={inputRef}
        placeholder={`Sök ${searchtype.display}`}
        onKeyPress={e => onKeyPress(e)}
        onChange={e => setInputText(e.target.value)}
        {...props}
      />
      <button
        type="button"
        onClick={() =>
          onSubmit({ value: inputtext, searchType: searchtype.value })
        }>
        <img src={searchDark} alt="Search" />
      </button>
    </div>
  );
};
InputTextfieldSearch.propTypes = {
  onSubmit: PropTypes.func,
};

export default InputTextfieldSearch;
