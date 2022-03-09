import axios from "axios";
import React, { useEffect, useState } from "react";

function InfiniteScroll() {

   const [page, setPage] = useState(1);

   const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}`);
    setPhotos([...photos,...data]);
};
console.log(photos);

  return <div>InfiniteScroll</div>;
}

export default InfiniteScroll;
