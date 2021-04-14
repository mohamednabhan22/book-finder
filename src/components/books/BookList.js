import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import BookCard from './BookCard';
const BookList = () => {
  const [state, setState] = useContext(Context);
  const { books_list, sorted_Books } = state;

  return (
    <div className="row">
      {books_list.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList;
