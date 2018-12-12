import { connect } from "react-redux";
import { Input } from "../components/Input/Input";
import { State } from "src/reducers";
import {
  addTodo,
  onChangeTodoInput,
  removeCompletedTodo,
  toggleAddButton
} from "src/actions";

const mapStateToProps = (state: State) => {
  return {
    value: state.value,
    todos: state.todos,
    showAddButton: state.showAddButton
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChangeInput: (value: string) => dispatch(onChangeTodoInput(value)),
  onAddTodo: (description: string) => dispatch(addTodo(description)),
  removeCompletedTodo: () => dispatch(removeCompletedTodo()),
  toggleAddButton: (show: boolean) => dispatch(toggleAddButton(show))
});

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export { InputContainer };
