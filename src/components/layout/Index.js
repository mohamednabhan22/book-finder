import React from 'react';
import Search from '../books/Search';
import BookList from '../books/BookList';
import { Route, Switch } from 'react-router-dom';

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <BookList />
    </React.Fragment>
  );
};

export default Index;
