import React, { useState, useEffect } from 'react';
import SearchBar from '../../organisms/SearchBar';
import SearchPageBooks from '../../molecules/SearchPageBooks';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [bookListDefault, setBookListDefault] = useState();
  const [bookList, setBookList] = useState();

  const fetchData = async () => {
    
  }

  const updateInput = async (input) => {
     const filtered = bookListDefault.filter(book => {
      return book.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setBookList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Upvote your favourites below or search to add a new book</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <SearchPageBooks bookList={bookList}/>
    </>
   );
}

export default SearchPage;
