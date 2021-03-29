import React from 'react';
import Card from '../Card/Card';
import Search from '../Search/Search';

const Home = () => {
  return(
    <React.Fragment>
      <Search />
      <div className="row">
        <div className="col-sm-4 mb-4">
          <Card />
        </div>
      </div>
    </React.Fragment>
  ); 
  ;
};

export default Home;
