import { pingAction } from "@redux/pingpong/ping-pong-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Container, Col } from "reactstrap";

/**
 * @interface IState Type annotation for redux state of PingTest component.
 */
interface IState {
  isPinging: boolean;
}

/**
 * @function PingTest Testing pinging component that uses Redux store as a data source.
 */
const PingTest: React.FC = () => {
  
  const isPinging = useSelector((state: IState) => state.isPinging);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <p>State: {isPinging ? "On" : "Off"}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button size="lg" onClick={() => dispatch(pingAction())}>
            Toggle
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PingTest;
