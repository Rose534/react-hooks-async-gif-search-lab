import React, { useState } from 'react';

const GifSearch = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <form onSubmit={e => handleSubmit(e, searchTerm)}>
      <input type="text" placeholder="Search for a gif" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  )
}

export default GifSearch;
