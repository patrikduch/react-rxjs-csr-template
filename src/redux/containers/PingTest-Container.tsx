import { connect } from "react-redux";

/* Actions */
import { ping } from "../actions/index";

import { bindActionCreators } from "redux";
import PingTest from "../../components/Pingtest";

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    pingAction: bindActionCreators(ping, dispatch),
  };
};

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: { isPinging: boolean }) => {
  return {
    isPinging: state.isPinging,
  };
};

const PingTestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PingTest);

export { PingTestContainer };
