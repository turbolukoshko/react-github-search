import React, { useContext } from "react";
import { GithubContext } from "../../context/github/githubContext";
import Card from "../Card/Card";
import Search from "../Search/Search";

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((user) => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
