import { connect } from "react-redux";
import { Input } from "../components/Input/Input";
import { State } from "src/reducers";
import { addTodo, onChangeTodoInput, toggleAddButton } from "src/actions";

const mapStateToProps = (state: State) => {
  return {
    value: state.value,
    showAddButton: state.showAddButton
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChangeInput: (value: string) => dispatch(onChangeTodoInput(value)),
  onAddTodo: (description: string) => dispatch(addTodo(description)),
  toggleAddButton: (show: boolean) => dispatch(toggleAddButton(show))
});

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export { InputContainer };
