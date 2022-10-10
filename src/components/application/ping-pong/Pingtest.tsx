import { pingAction } from "@redux/pingpong/ping-pong-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import INITIALSTATE from "@redux/store/initial-state";

/**
 * @interface IState Type annotation for redux state of PingTest component.
 * @author Patrik Duch
 */
interface IState {
  pingPong: typeof INITIALSTATE.pingPong
}

/**
 * @function PingTest Testing pinging component that uses Redux store as a data source.
 * @author Patrik Duch
 */
const PingTest: React.FC = () => {
  
  const isPinging = useSelector((state: IState) => {
    return state.pingPong.isPinging
  });
  const dispatch = useDispatch();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <span>{isPinging ? 'true': 'false'}</span>
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' onClick={() => dispatch(pingAction())} type="button">Click me</Button>
      </Grid>
    </Grid>
    </>
  );
};

export default PingTest;
