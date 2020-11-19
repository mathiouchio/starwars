import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Component from "./wrapper";
import * as actionCreators from "../actions";

function mapStateToProps(state) {
  return state.reducer;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
