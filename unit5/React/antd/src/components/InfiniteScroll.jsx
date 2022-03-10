import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

function InfiniteScroll() {
  const [page, setPage] = useState(1);

  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    getData();

    return () => {};
  }, [page]);

  const getData = async () => {
    try {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}`
      );
      setPhotos([...photos, ...data]);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(photos);

  window.onscroll = function () {
    // console.log(window.innerHeight + window.scrollY,document.documentElement.scrollHeight)
    if (
      window.innerHeight + window.scrollY ===
      document.documentElement.scrollHeight
    ) {

      setPage(()=> page + 1)

    }
  };

  return <div>
    {
      photos.length > 0 && photos.map((photo)=> {
        return <div key={photo.id}> 
        <img src={photo.url} alt={photo.url}/>
        </div>
      })
    }
  </div>;
}

export default InfiniteScroll;
