import * as React from "react";
import { v4 } from "uuid";
import { TodoWrapper, TextTodo } from "./styles";
import { CSSTransition } from "react-transition-group";
import { TodoT } from "../../types/Todo";
import { Icon } from "../UI/Icon";
import { useKeyUpEsc } from "../../hooks/useKeyUpEsc";

type SimplifiedTodoProps = Omit<TodoT, "category_name" | "trash" | "user_name">;

type Props = SimplifiedTodoProps & {
  onTrash: (id: string) => void;
  onComplete: (id: string, completed: boolean) => void;
  onEditDescription: (id: string, description: string) => void;
};

const Todo: React.FC<Props> = ({ id, description, completed, onTrash, onComplete, onEditDescription }) => {
  const todoId = React.useRef(v4());
  const [overlayButton, setOverlayButton] = React.useState(false);
  const [todoIsVisible, setTodoIsVisible] = React.useState(true);
  const [todoIsEditable, setTodoIsEditable] = React.useState(false);

  const onBlurEditTodo = () => {
    const todoDiv = document.getElementById(todoId.current);

    if (todoDiv) {
      onEditDescription(id, todoDiv.innerText);
    }
  };

  const clickEsc = () => {
    onEditDescription(id, description);
    setTodoIsEditable(false);
  };

  useKeyUpEsc(clickEsc);

  return (
    <CSSTransition in={todoIsVisible} timeout={{ enter: 300, exit: 300 }} onExited={() => onTrash(id)} unmountOnExit>
      {status => (
        <TodoWrapper
          onDoubleClick={_ => setTodoIsEditable(true)}
          className={`wrapper-${status}`}
          onMouseEnter={() => setOverlayButton(true)}
          onMouseLeave={() => setOverlayButton(false)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {completed ? (
              <Icon name="check-on" onClick={() => onComplete(id, false)} />
            ) : (
              <Icon name="check-off" onClick={() => onComplete(id, true)} />
            )}
            <TextTodo
              id={todoId.current}
              completed={completed}
              contentEditable={todoIsEditable}
              onBlur={_ => {
                setTodoIsEditable(false);
                onBlurEditTodo();
              }}
              suppressContentEditableWarning={true}
            >
              {description}
            </TextTodo>
          </div>
          {overlayButton && <Icon name="remove" onClick={() => setTodoIsVisible(false)} />}
        </TodoWrapper>
      )}
    </CSSTransition>
  );
};

export { Todo };
