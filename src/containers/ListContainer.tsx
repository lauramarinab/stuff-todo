import { connect } from "react-redux";
import { List } from "../components/List";
import { State } from "src/reducers";
import { toggleTodo, removeTodo } from "src/actions";

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onToggle: (id: string) => dispatch(toggleTodo(id)),
  onRemove: (id: string) => dispatch(removeTodo(id))
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export { ListContainer };
