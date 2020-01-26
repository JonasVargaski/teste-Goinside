import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './styles';

let timer = null;

export default function Search({ debounce, onChange, ...rest }) {
  const [value, setValue] = useState('');

  function setValueDebounce(e) {
    const text = e.target.value;

    setValue(text);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      onChange(text);
    }, debounce);
  }

  return <Input value={value} {...rest} onChange={setValueDebounce} />;
}

Search.propTypes = {
  debounce: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
