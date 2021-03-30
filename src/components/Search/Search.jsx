import React, { useContext, useState } from 'react';
import { AlertContext } from '../../context/alert/alertContext';

const Search = () => {

  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);

  const onSubmit = event => {
    if(event.key !== 'Enter') {
      return;
    }

    if(value.trim()) {
      console.log(`Make request with: ${value}`);
    }else {
      show('Enter user data');
    }
  }

  return(
    <div className="form-group">
      <input 
        type="text" 
        onKeyPress={onSubmit}
        value={value}
        onChange={e => setValue(e.target.value)}
        className="form-control" 
        placeholder="Enter username" 
      />
    </div>
  );
}

export default Search;
