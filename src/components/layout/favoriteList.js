import React from 'react';
import FilterList from '../books/FilterList';
import FavBookSList from '../books/FavBooksList';

const favoriteList = () => {
  return (
    <React.Fragment>
      {/* <FilterList /> */}
      <FavBookSList />
    </React.Fragment>
  );
};

export default favoriteList;
