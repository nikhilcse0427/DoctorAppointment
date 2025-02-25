/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext } from 'react';
import { doctors } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;

