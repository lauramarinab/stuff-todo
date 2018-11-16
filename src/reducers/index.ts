import { TodoT } from "./../types/Todo";
import { actions } from "./../actions/index";
import { v4 } from "uuid";

export type State = {
  todos: TodoT[];
  value: string;
};

const initialState: State = {
  todos: [],
  value: ""
};

export const todos = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        value: "",
        todos: [
          ...state.todos,
          { id: v4(), description: action.description, completed: false }
        ]
      };
    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => action.id !== todo.id)
      };
    case actions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: action.id === todo.id ? !todo.completed : todo.completed
        }))
      };
    case actions.ONCHANGE_INPUT:
      return {
        ...state,
        value: action.value
      };
    case actions.REMOVE_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
