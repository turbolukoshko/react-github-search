import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return(
    <div className="card">
      <img src={''} alt={''} className="card-img-top"/>
      <div className="card-body">
        <h3 className="card-title">Username</h3>
        <Link to={'/profile/react'} className="btn btn-primary">Open</Link>
      </div>
    </div>
  );
}

export default Card;
