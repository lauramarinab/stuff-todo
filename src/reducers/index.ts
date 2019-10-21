import { TodoT } from "./../types/Todo";
import { actions } from "./../actions/index";
import { v4 } from "uuid";

export type State = {
  todos: Array<TodoT>;
  value: string;
  showAddButton: boolean;
};

const initialTodoState: Array<TodoT> = [
  { id: v4(), description: "Comprare il pane", completed: false, trash: false, category: null },
  { id: v4(), description: "Comprare la farina", completed: true, trash: false, category: null },
  { id: v4(), description: "Comprare acqua", completed: true, trash: false, category: null }
];

const initialState: State = {
  todos: initialTodoState,
  value: "",
  showAddButton: false
};

export const todos = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        value: "",
        todos: [
          ...state.todos,
          { id: v4(), description: action.description, completed: false, trash: false, category: null }
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
    case actions.TOGGLE_ADD_BUTTON:
      return {
        ...state,
        showAddButton: action.show
      };
    default:
      return state;
  }
};
