import { connect } from "react-redux";
import { State } from "src/reducers";
import { AnalysisTodo } from "src/components/AnalysisTodo";

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos
  };
};

const AnalysisTodoContainer = connect(mapStateToProps)(AnalysisTodo);

export { AnalysisTodoContainer };
