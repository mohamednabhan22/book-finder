import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    books_list: [],
    fav_books_list: []
  };

  const [state, setState] = useState(intialState);
  useEffect(async () => {
    try {
      const APIKey = 'AIzaSyAASfFkO2QNBCRTjrtMF2ZUGhLJEgATx6g'
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${APIKey}&maxResults=20`
      );

      setState({
        books_list: res.data.items,
        fav_books_list: [...fav_books_list]
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const { books_list, fav_books_list, books_search_result } = state;

  // addBook func
  const addBook = BookID => {
    let favBook = books_list.filter(book => book.id === BookID);
    console.log('favBook', favBook);
    setState({
      books_list: [...books_list],
      fav_books_list: [favBook[0], ...state.fav_books_list]
    });

    // let InList = fav_books_list.map(book =>
    //   book.id === favBook.id ? true : false
    // );
    // if (InList[0] === false) {
    //   setState({
    //     books_list: [...books_list],
    //     fav_books_list: [favBook[0], ...state.fav_books_list]
    //   });
    // }
    // console.log('InList', InList[0]);

    // console.log('books_search_result', books_search_result);

    // console.log('fav_books_list', fav_books_list);
  };

  // removeBook func
  const removeBook = BookID => {
    let targetBook1 = books_list.filter(book => book.id !== BookID);
    let targetBook2 = fav_books_list.filter(book => book.id !== BookID);
    setState({
      books_list: [...targetBook1],
      fav_books_list: [...targetBook2]
    });
  };

  //downloadBook 
  // const downloadBook = BookID => {
  // location:      

  // }

  //test
  console.log('fav_books_list', fav_books_list);
  return (
    <Context.Provider value={[state, setState, addBook, removeBook]}>
      {children}
    </Context.Provider>
  );
}
