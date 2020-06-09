import React from "react";
import { Button, Row, Container, Col } from "reactstrap";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  isPinging: boolean;
  pingAction(): void;
}

const PingTest: React.FC<IProps> = ({ isPinging, pingAction }) => {
  const switchState = () => {
    pingAction();
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p>Stav: {isPinging ? "Zapnuto" : "Vypnuto"}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button size="lg" onClick={switchState}>
              Přepnout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PingTest;
