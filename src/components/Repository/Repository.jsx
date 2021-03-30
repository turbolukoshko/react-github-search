import React, { Fragment } from 'react';

const Repository = ({repos}) => {
  return(
    <Fragment>
      {repos.map(repo => {
        return(
          <div className="card mb-3" key={repo.id}>
            <div className="card-body">
              <h3>
                <a 
                  href={repo.html_url} 
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Repository;
