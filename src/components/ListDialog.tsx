import * as React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { Dialog } from "./Dialog/Dialog";
import { ButtonIcon } from "./UI/ButtonIcon";
import { TodoT, TodoActions } from "../types/Todo";
import { Todo } from "./ListTodo/Todo";
import { CategoryName, ButtonWrapper } from "./Dialog/styles";
import { AddSimpleTodo } from "./Input/AddSimpleTodo";
import { fetchData } from "../client";
import { Category } from "../types/Category";

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
  onCreateTodo: (description: string, categoryId: number | null) => void;
};

const ListDialog: React.FC<Props> = ({
  open,
  onClose,
  todos,
  onComplete,
  onTrash,
  onEditDescription,
  onCreateTodo
}) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const { data: categories, error } = useSWR<Array<Category>>("/category", fetchData);

  if (error) {
    return <div>error!</div>;
  }

  if (!categories) {
    return <div>loading!</div>;
  }

  const categoryName = todos[0].category_name;

  const onCreate = () => {
    const categoryId = categories.find(c => c.name === categoryName)?.id;
    if (inputValue !== "" && categoryId) {
      onCreateTodo(inputValue, categoryId);
      setInputValue("");
    } else {
      console.log("Devi scrivere un'attività prima di creare un todo");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} portalStyle={{ height: 500 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CategoryName>{categoryName}</CategoryName>
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
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddSimpleTodo
          onCreate={onCreate}
          inputValue={inputValue}
          onChangeInputValue={(value: string) => setInputValue(value)}
          placeholder="Aggiungi todo alla lista"
        />
        <ButtonWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon iconName="trash" label="Elimina lista" onClick={() => {}} style={{ marginRight: 20 }} />
            <ButtonIcon iconName="trash" label="Archivia lista" onClick={() => {}} />
          </div>
          <Label onClick={onClose}>Chiudi</Label>
        </ButtonWrapper>
      </div>
    </Dialog>
  );
};

export { ListDialog };
