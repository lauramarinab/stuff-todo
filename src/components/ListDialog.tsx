import * as React from "react";
import styled from "styled-components";
import { Dialog } from "./Dialog/Dialog";
import { ButtonIcon } from "./UI/ButtonIcon";
import { TodoT, TodoActions } from "../types/Todo";
import { Todo } from "./ListTodo/Todo";

const Label = styled.h4`
  color: var(--dark-grey);
  font-size: 12px;
  cursor: pointer;
  user-select: none;
`;

type Props = TodoActions & {
  open: boolean;
  onClose: () => void;
  todos: Array<TodoT>;
};

const ListDialog: React.FC<Props> = ({ open, onClose, todos, onComplete, onTrash, onEditDescription }) => {
  const categoryName = todos[0].category_name;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      categoryName={categoryName}
      buttonSection={
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon iconName="trash" label="Elimina lista" onClick={() => {}} style={{ marginRight: 20 }} />
            <ButtonIcon iconName="trash" label="Archivia lista" onClick={() => {}} />
          </div>
          <Label onClick={onClose}>Chiudi</Label>
        </>
      }
    >
      <div style={{ marginTop: 15, marginBottom: 30 }}>
        {todos.map(todo => (
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
    </Dialog>
  );
};

export { ListDialog };
