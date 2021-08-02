import { connect } from 'react-redux';

/* Actions */
import { bindActionCreators } from 'redux';
import PingTest from '@components/Pingtest';
import { pingAction } from './ping-pong-actions';


/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    pingAction: bindActionCreators(pingAction, dispatch),
  };
};

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state State passed into props.
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