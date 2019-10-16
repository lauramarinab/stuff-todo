import * as React from "react";
import { TodoT } from "src/types/Todo";

interface Props {
  todos: Array<TodoT>;
  removeCompletedTodo: () => void;
}

const ButtonRemoveTodo: React.FC<Props> = ({ todos, removeCompletedTodo }) => {
  const todosAreCompleted = todos.find(t => t.completed);

  if (todosAreCompleted) {
    return <button onClick={() => removeCompletedTodo()}>remove all completed to do</button>;
  } else {
    return null;
  }
};

export { ButtonRemoveTodo };
