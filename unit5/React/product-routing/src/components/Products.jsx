import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Products() {
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        console.log("res:", res);
      });
  };
  return (
    <MainDiv>
      {products.map((e) => (
        <Box key={e.id}>
          <Link to={`/products/${e.id}`}>{e.title}</Link>
        </Box>
      ))}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(6, 15%);
  //   grid-gap: 5%;
`;
const Box = styled.div`
  margin: 2%;
  font-size: 20px;
`;

export default Products;
