import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

const MiniCart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <h3>Cart Items</h3>
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item, index) => {
          return (
            <Row key={index}>
              <Col>
                {item.title}
                <br />
                <strong> {item.price}$</strong>
              </Col>
              <Col>{item.count} </Col>
            </Row>
          );
        })}
    </>
  );
};

export default MiniCart;
