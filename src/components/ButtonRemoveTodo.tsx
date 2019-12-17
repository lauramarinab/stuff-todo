import * as React from "react";
import { TodoT } from "../types/Todo";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  transition: all 0.3s;
  cursor: pointer;
  outline: 0;
  border: 1px solid var(--medium-grey);
  &:hover {
    border-radius: 20px;
  }
  &.button-entering {
    opacity: 0;
  }
  &.button-entered {
    opacity: 1;
  }
  &.button-exiting {
    opacity: 0;
  }
  &.button-exited {
    opacity: 0;
  }
`;

interface Props {
  todos: Array<TodoT>;
  removeCompletedTodo: () => void;
}

const ButtonRemoveTodo: React.FC<Props> = ({ todos, removeCompletedTodo }) => {
  const todosAreCompleted = todos.find(t => t.completed);

  return (
    <CSSTransition in={Boolean(todosAreCompleted)} timeout={{ enter: 300, exit: 500 }}>
      {status => (
        <Button className={`button-${status}`} onClick={() => removeCompletedTodo()}>
          remove completed todos
        </Button>
      )}
    </CSSTransition>
  );
};

export { ButtonRemoveTodo };
