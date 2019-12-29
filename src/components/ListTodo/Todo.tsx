import * as React from "react";
import { TodoWrapper, TextTodo } from "./styles";
import { CSSTransition } from "react-transition-group";
import { TodoT } from "../../types/Todo";
import { Icon } from "../UI/Icon";

type SimplifiedTodoProps = Omit<TodoT, "category_name" | "trash" | "user_name">;

type Props = SimplifiedTodoProps & {
  onTrash: (id: string) => void;
  onComplete: (id: string, completed: boolean) => void;
};

const Todo: React.FC<Props> = ({ id, description, completed, onTrash, onComplete }) => {
  const [overlayButton, setOverlayButton] = React.useState(false);
  const [todoIsVisible, setTodoIsVisible] = React.useState(true);

  return (
    <CSSTransition in={todoIsVisible} timeout={{ enter: 300, exit: 300 }} onExited={() => onTrash(id)} unmountOnExit>
      {status => (
        <TodoWrapper
          onClick={() => onComplete(id, !completed)}
          className={`wrapper-${status}`}
          onMouseEnter={() => setOverlayButton(true)}
          onMouseLeave={() => setOverlayButton(false)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {completed ? <Icon name="check-on" /> : <Icon name="check-off" />}
            <TextTodo completed={completed}>{description}</TextTodo>
          </div>
          {overlayButton && <Icon name="remove" onClick={() => setTodoIsVisible(false)} />}
        </TodoWrapper>
      )}
    </CSSTransition>
  );
};

export { Todo };
