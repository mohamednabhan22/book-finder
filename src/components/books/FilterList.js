import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context';

const FilterList = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState('');
  const [sort, setSort] = useState('');
  const { books_list } = state;

  // onchange
  const onChange = e => {
    setUserInput(e.target.value);
  };

  const onSort = e => {
    setSort({ sort: e.target.value });
    setState({
      books_list: sortedBooks
    });
  };
  //end of onchange

  // cleandata
  const cleanData = data => {
    const cleanData = data.map(book => {
      if (book.volumeInfo.hasOwnProperty('publishedData') === false) {
        book.volumeInfo['publishedData'] = '0000';
      }
      return book;
    });
    return cleanData;
  };

  // Sort
  let booksCurrentData = cleanData(books_list);

  let sortedBooks = booksCurrentData.sort((a, b) => {
    // console.log(sort);
    if (sort.sort === 'Newest') {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort.sort === 'Oldest') {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort.sort === 'Name') {
      let nameA = a.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
      let nameB = b.volumeInfo.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    } else if (sort.sort === 'Author') {
      let nameA = a.volumeInfo.authors[0].toUpperCase(); // ignore upper and lowercase
      let nameB = b.volumeInfo.authors[0].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }
  });
  // sort end

  // filterBooks func
  const filterBooks = () => {
    const { books_list } = state;
    let filterData = books_list.filter(
      book =>
        book.volumeInfo.title.toLowerCase().includes(userInput.toLowerCase()) ||
        book.volumeInfo.authors[0]
          .toLowerCase()
          .includes(userInput.toLowerCase()) ||
        book.volumeInfo.imageLinks.thumbnail
          .toLowerCase()
          .includes(userInput.toLowerCase()) ||
        book.volumeInfo.previewLink
          .toLowerCase()
          .includes(userInput.toLowerCase())
    );

    setState({
      books_list: [...filterData]
    });
    setUserInput('');
  };

  //test section
  console.log('sort', sort);
  console.log('sortedBooks', sortedBooks);
  // console.log('booksCurrentData', booksCurrentData);
  // console.log('books_list', books_list);
  // console.log('books_search_result', books_search_result);
  // Sort(sort);
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-book" /> Search for Books
      </h1>
      <div className="container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search books by name ,author img url or preview link..."
              name="userInput"
              value={userInput}
              onChange={onChange}
            />
          </div>

          <div className="row justify-content-md-center">
            <div className="col-10 ">
              {' '}
              <button
                className="btn btn-outline-dark btn-lg btn-block mt-3 mb-3"
                onClick={() => filterBooks()}
              >
                filter Books List
              </button>
              <h6 className="mx-auto">
                filter current list of books by (filter books list) button
              </h6>
            </div>
            <div className="col col-2">
              {' '}
              <div className="from-group">
                <select className="custom-select" onChange={onSort}>
                  <option>*Sort</option>
                  <option value="Author">Author</option>
                  <option value="Name">Name</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterList;
