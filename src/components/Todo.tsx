import * as React from "react";
import { TodoT } from "src/types/Todo";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
`;

type Props = TodoT & {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

const Todo: React.SFC<Props> = ({
  id,
  description,
  completed,
  onToggle,
  onRemove
}) => {
  return (
    <TodoWrapper>
      <div onClick={() => onToggle(id)}>
        {completed ? <span>V</span> : <span>O</span>}
        <span>{description}</span>
      </div>
      <span onClick={() => onRemove(id)}>X</span>
    </TodoWrapper>
  );
};

export { Todo };
