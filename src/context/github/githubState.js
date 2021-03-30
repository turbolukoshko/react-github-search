import React, { useReducer } from 'react';
import { CLEAR_USERS, GET_REPOSITORY, GET_USER, SEARCH_USERS, SET_LOADING } from '../types';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';

export const GithubState = ({children}) => {

  const initialState = {
    user: {},
    users: {},
    loading: false,
    repositories: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async value => {
    setLoading();
    // TODO: axios

    dispatch({
      type: SEARCH_USERS,
      payload: [],
    })
  }

  const getUser = async name => {
    setLoading();
    // TODO: axios

    dispatch({
      type: GET_USER,
      payload: {},
    })
  }

  const getRepositories = async repos => {
    setLoading();
    // TODO: axios

    dispatch({
      type: GET_REPOSITORY,
      payload: [],
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  const setLoading = () => dispatch({type: SET_LOADING});

  return(
    <GithubContext.Provider value={{
      search, getUser, getRepositories, clearUsers, setLoading
    }}>
      {children}
    </GithubContext.Provider>
  );
}