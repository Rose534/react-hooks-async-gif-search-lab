import React, { useState, useEffect } from 'react';

function GiftListContainer(){

  const [gif, setGif] = useState([]);

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=UB8l41VGu4gQ44Eg8cbMNJ3uZRQ9A7PJ&rating=g")
      .then(res => res.json())
      .then(data => setGif(data))
  }, []);
  console.log(gif)
    return (
        <div>
            {gif.url}
        </div>
    )
}


export default GiftListContainer