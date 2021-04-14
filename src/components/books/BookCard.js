import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';

const BookCard = ({ book }) => {
  const [state, setState, addBook, removeBook] = useContext(Context);
  const { books_list, fav_books_list } = state;

  let BookInFavList = fav_books_list.filter(item => item.id === book.id);
  // console.log('BookInFavList', BookInFavList);
  //card info from 
  let title = book.volumeInfo.title;
  let desc = book.volumeInfo.description;
  let publishedDate = book.volumeInfo.publishedDate;
  let author = book.volumeInfo.authors 
  let previewLink = book.volumeInfo.previewLink;
  let ReadLink = book.accessInfo.webReaderLink;
  let downloadLink = book.accessInfo.pdf.downloadLink;
  let isAvailableDownload = book.accessInfo.pdf.isAvailable;
  // let img = book.volumeInfo.imageLinks.thumbnail ;     

  
  // const downloadLink = "http://books.google.com.eg/books/download/Minutes_of_the_Session_of_the_New_Jersey.pdf?id=qOUpAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1Ow1QyjcIMJ_IUDTiawBXnu6QEPw&source=gbs_api";
  
 
  
  
  const styleBtn = { marginLeft: '5px' };
  const cardStyle = { width: '18rem' };
  return (
    <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="card mb-4 ">
        <div className="card-body">
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? "https://www.akdyusa.com/scs/default/img/no_image_available.jpeg?resizeid=3&resizeh=600&resizew=600sherlock%20holmes"
                : `${book.volumeInfo.imageLinks.thumbnail}`
          }
        
            className="card-img-top"
            alt="image not found"
          />

          <h5 className="card-title">{title}</h5>
          <h6 className="card-text">Author: {author}</h6>
          <h6 className="card-text">Published Date :{publishedDate}</h6>
          <p className="card-text"> { 
            book.volumeInfo.description === undefined
            ? '- no describtion found': 
          desc.slice(0,150) + '...'}</p>

          <div className="container">
            <div className="row">
              <div className=" col-4 ">
                <a href={ReadLink} className="btn btn-primary  ">
                  Read 
                </a>
              </div>
              <div className=" col-4 ">
                <a href={previewLink} className="btn btn-secondary   ">
                  more  
                </a>
              </div>
              <div className=" col-4">
                {BookInFavList[0] ? (
                  <button className="btn btn-dark"> Added</button>
                ) : (
                  <button
                    onClick={() => addBook(book.id)}
                    className="btn btn-warning"
                  >
                    Add 
                  </button>
                )}
                {/* <button
                  onClick={() => addBook(book.id)}
                  className="btn btn-warning"
                >
                  Add 
                </button> */}
              </div>
            </div>
          </div>
          
        </div>
        {isAvailableDownload ?   
        <a href={ book.accessInfo.pdf.downloadLink === undefined || null ? downloadLink : downloadLink} className="btn btn-success text-white">
                  Download 
        </a> : null
      }
                      {BookInFavList[0] ?
                       <button onClick={() => removeBook(book.id)} className="btn btn-danger mt-1 ">
                          Remove 
                        </button>     
                         : null }
      
      </div>
    </div>
  );
};
export default BookCard;
