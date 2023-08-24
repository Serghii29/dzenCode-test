import React from 'react';
import classes from '../../styles/search.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search"
    />
  );
};
