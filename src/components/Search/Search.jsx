import React, { useContext, useState } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { GithubContext } from '../../context/github/githubContext';

const Search = () => {

  const [value, setValue] = useState('');
  const {hide, show} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if(event.key !== 'Enter') {
      return;
    }

    github.clearUsers();
    
    if(value.trim()) {
      hide();
      github.search(value.trim());
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
