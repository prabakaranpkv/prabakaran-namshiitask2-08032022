import { Row, Col, Container } from "react-bootstrap";

import MainContent from "./MainContent";
import MiniCart from "./Cart";
const Content = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <MainContent />
          </Col>
          <Col>
            <MiniCart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
