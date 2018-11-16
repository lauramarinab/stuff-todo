import * as React from "react";
import { TodoT } from "./../types/Todo";
import { Todo } from "./Todo";

interface Props {
  todos: TodoT[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const List: React.SFC<Props> = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          description={todo.description}
          key={todo.id}
          id={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export { List };
