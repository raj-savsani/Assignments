import React from "react";
import { Pagination } from "antd";
import InfiniteScroll from "./InfiniteScroll";

function Pages() {
  
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  function page(value) {
    console.log(value);
  }

  return (
    <div>
      <Pagination
        showSizeChanger
        onChange={page}
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      <InfiniteScroll />
    </div>
  );
}

export default Pages;
