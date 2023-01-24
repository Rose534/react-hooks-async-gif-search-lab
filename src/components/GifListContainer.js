import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=UB8l41VGu4gQ44Eg8cbMNJ3uZRQ9A7PJ&rating=g`);
      const data = await response.json();
      setGifs(data.data);
    }
    fetchData();
  }, [searchTerm]);

  const handleSubmit = (e,searchTerm) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
  }

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer;
