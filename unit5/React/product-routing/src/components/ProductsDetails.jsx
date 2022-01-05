import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductsDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        console.log("product:", product);
      });
  };

  return (
    <MainDiv>
      <div>
        <img src={product.image} alt="image" />
      </div>
      <div>
        <Title>{product.title}</Title>
        <P>{product.description}</P>
        <P style={{ fontWeight: "bold" }}>{product.price} $</P>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  margin: 2%;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 550px;
    height: 550px;
  }
  div {
    margin: 2%;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 15px;
`;
export default ProductsDetails;
