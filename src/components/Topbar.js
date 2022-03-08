import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container fluid>
          <h1
            style={{
              fontWeight: 700,
              color: "white",
              textShadow: "0 0 10px #FFFFFF",
            }}
          >
            Online Shopping
          </h1>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
