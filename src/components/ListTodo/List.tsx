import * as React from "react";
import { TodoT } from "./../../types/Todo";
import { Todo } from "./Todo";
import { TitleSection } from "./styles";

interface Props {
  todos: TodoT[];
  onComplete: (id: string, completed: boolean) => void;
  onTrash: (id: string) => void;
}

const List: React.FC<Props> = ({ todos, onComplete, onTrash }) => {
  return (
    <div style={{ marginTop: 50 }}>
      <TitleSection>All to do</TitleSection>
      <div style={{ marginTop: 10, width: "460px" }}>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            description={todo.description}
            onComplete={() => onComplete(todo.id, !todo.completed)}
            onTrash={onTrash}
          />
        ))}
      </div>
    </div>
  );
};

export { List };
