import * as React from "react";
import { TodoT } from "src/types/Todo";
import { TodoWrapper, TextTodo } from "./styles";

const pallino = require("../../assets/icon/pallino.svg");
const checkedPallino = require("../../assets/icon/checked-pallino.svg");
const remove = require("../../assets/icon/remove.svg");

type Props = TodoT & {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

const Todo: React.FC<Props> = ({ id, description, completed, onToggle, onRemove }) => {
  return (
    <TodoWrapper onClick={() => onToggle(id)} style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {completed ? <img src={checkedPallino} /> : <img src={pallino} />}
        <TextTodo completed={completed}>{description}</TextTodo>
      </div>
      <img src={remove} onClick={() => onRemove(id)} />
    </TodoWrapper>
  );
};

export { Todo };
