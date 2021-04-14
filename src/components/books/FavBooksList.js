import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import BookCard from './BookCard';
const FavBookSList = () => {
  const [state, setState] = useContext(Context);
  const { books_list, fav_books_list } = state;

  return (
    <div className="row">
      {fav_books_list.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
export default FavBookSList;
