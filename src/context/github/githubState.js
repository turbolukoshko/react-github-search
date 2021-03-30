import axios from "axios";
import React, { useReducer } from "react";
import {
  CLEAR_USERS,
  GET_REPOSITORY,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: {},
    loading: false,
    repositories: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  
  const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  }  

  const search = async (value) => {
    setLoading();
    // TODO: axios
    const response = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`));

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${name}?`));
    // TODO: axios

    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  const getRepositories = async (repos) => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${repos}/repos?per_page=5&`));
    // TODO: axios

    dispatch({
      type: GET_REPOSITORY,
      payload: response.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repositories, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        search,
        getUser,
        getRepositories,
        clearUsers,
        setLoading,
        user,
        users,
        repositories,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
