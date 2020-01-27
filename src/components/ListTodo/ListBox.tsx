import * as React from "react";
import { TodoT, TodoActions } from "../../types/Todo";
import { Todo } from "./Todo";
import styled from "styled-components";
import { TitleSection } from "./styles";
import { Icon } from "../UI/Icon";

const Wrapper = styled.div`
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  height: 220px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type Props = TodoActions & {
  todos: Array<TodoT>;
  onOpenListDialog: () => void;
};

const MAX_LENGTH_TODOS = 4;

const ListBox: React.FC<Props> = ({ todos, onComplete, onTrash, onEditDescription, onOpenListDialog }) => {
  const categoryName = todos[0].category_name;

  const maxTodos = todos.slice(0, MAX_LENGTH_TODOS);

  return (
    <Wrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TitleSection>{categoryName}</TitleSection>
        <div style={{ marginTop: 15 }}>
          {maxTodos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              description={todo.description}
              onComplete={onComplete}
              onTrash={onTrash}
              onEditDescription={onEditDescription}
            />
          ))}
        </div>
      </div>
      <Icon
        style={{
          alignSelf: "flex-end",
          position: "relative",
          bottom: todos.length >= MAX_LENGTH_TODOS ? 8 : -12,
          right: -6,
          transition: "all 0.3s"
        }}
        name="more"
        onClick={onOpenListDialog}
      />
    </Wrapper>
  );
};

export { ListBox };
