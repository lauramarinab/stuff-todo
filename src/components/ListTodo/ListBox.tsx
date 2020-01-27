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
`;

type Props = TodoActions & {
  todos: Array<TodoT>;
  onOpenListDialog: () => void;
};

const ListBox: React.FC<Props> = ({ todos, onComplete, onTrash, onEditDescription, onOpenListDialog }) => {
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
            onComplete={onComplete}
            onTrash={onTrash}
            onEditDescription={onEditDescription}
          />
        ))}
      </div>
      {todos.length > maxTodos.length && (
        <Icon
          style={{ alignSelf: "flex-end", position: "relative", bottom: 8, right: -6 }}
          name="more"
          onClick={onOpenListDialog}
        />
      )}
    </Wrapper>
  );
};

export { ListBox };
