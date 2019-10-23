import * as React from "react";
import { TodoT } from "src/types/Todo";
import { TodoWrapper, TextTodo } from "./styles";
import { CSSTransition } from "react-transition-group";

const pallino = require("../../assets/icon/pallino.svg");
const checkedPallino = require("../../assets/icon/checked-pallino.svg");
const remove = require("../../assets/icon/remove.svg");

type SimplifiedTodoProps = Omit<TodoT, "category" | "trash">;

type Props = SimplifiedTodoProps & {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

const Todo: React.FC<Props> = ({ id, description, completed, onToggle, onRemove }) => {
  const [overlayButton, setOverlayButton] = React.useState(false);
  const [todoIsVisible, setTodoIsVisible] = React.useState(true);

  return (
    <CSSTransition in={todoIsVisible} timeout={{ enter: 300, exit: 400 }} onExited={() => onRemove(id)}>
      {status => (
        <TodoWrapper
          onClick={() => onToggle(id)}
          style={{ cursor: "pointer" }}
          className={`wrapper-${status}`}
          onMouseEnter={() => setOverlayButton(true)}
          onMouseLeave={() => setOverlayButton(false)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {completed ? <img src={checkedPallino} /> : <img src={pallino} />}
            <TextTodo completed={completed}>{description}</TextTodo>
          </div>
          {overlayButton && <img src={remove} onClick={() => setTodoIsVisible(false)} />}
        </TodoWrapper>
      )}
    </CSSTransition>
  );
};

export { Todo };
