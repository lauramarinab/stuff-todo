import * as React from "react";
import { TodoT } from "../../types/Todo";
import { Todo } from "./Todo";
import styled from "styled-components";
import { TitleSection } from "./styles";

const Wrapper = styled.div`
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  height: 220px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  todos: Array<TodoT>;
  onComplete: (id: string, completed: boolean) => void;
  onTrash: (id: string) => void;
}

const ListBox: React.FC<Props> = ({ todos, onComplete, onTrash }) => {
  const categoryName = todos[0].category_name;

  const maxTodos = todos.slice(0, 4);

  return (
    <Wrapper>
      <TitleSection>{categoryName}</TitleSection>
      <div style={{ marginTop: 15 }}>
        {maxTodos.map(todo => (
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
      {todos.length > maxTodos.length && (
        <span style={{ alignSelf: "flex-end", position: "relative", bottom: 5 }}>•••</span>
      )}
    </Wrapper>
  );
};

export { ListBox };
