import { pingAction } from "@redux/pingpong/ping-pong-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Container, Col } from "reactstrap";

/**
 * @function PingTest Testing pinging component that uses Redux store as a data source.
 */
const PingTest: React.FC= () => {
  
  const isPinging = useSelector((state: { isPinging: boolean }) => state.isPinging);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <p>Stav: {isPinging ? "Zapnuto" : "Vypnuto"}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button size="lg" onClick={() => dispatch(pingAction())}>
            Přepnout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PingTest;
