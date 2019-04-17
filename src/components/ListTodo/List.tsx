import * as React from "react";
import { TodoT } from "./../../types/Todo";
import { Todo } from "./Todo";
import { TitleSection } from "./styles";

interface Props {
  todos: TodoT[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const List: React.FC<Props> = ({ todos, onToggle, onRemove }) => {
  return (
    <div style={{ marginTop: 50 }}>
      <TitleSection>All to do</TitleSection>
      <div style={{ marginTop: 10, width: "460px" }}>
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
    </div>
  );
};

export { List };
