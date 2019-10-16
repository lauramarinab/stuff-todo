import { connect } from "react-redux";
import { State } from "src/reducers";
import { removeCompletedTodo } from "src/actions";
import { ButtonRemoveTodo } from "src/components/ButtonRemoveTodo";

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  removeCompletedTodo: () => dispatch(removeCompletedTodo())
});

const ButtonRemoveTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonRemoveTodo);

export { ButtonRemoveTodoContainer };
