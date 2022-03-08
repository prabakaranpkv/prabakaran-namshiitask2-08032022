import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";

import { fetchStudentList, addItemToCart } from "../redux/actions/products";

const MainContent = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  useEffect(() => {
    dispatch(fetchStudentList());
  }, [dispatch]);
  return (
    <Container>
      <h3>Products</h3>
      {productList &&
        productList.length > 0 &&
        productList.map((item, index) => {
          return (
            <Row key={index}>
              <Col>
                <img src={item.image} width="100" height="100" alt="img" />
              </Col>
              <Col>
                {item.title} <br />
                <strong>{item.price}$</strong>
              </Col>
              <Col>
                <Button onClick={() => addToCart(item)}>Add to Cart</Button>
              </Col>
            </Row>
          );
        })}
      <hr />
    </Container>
  );
};

export default MainContent;
