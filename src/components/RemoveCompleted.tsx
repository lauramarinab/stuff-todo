import * as React from "react";
import { TodoT } from "src/types/Todo";

type Props = Pick<TodoT, "id"> & {
  todos: TodoT[];
  onRemoveCompletedTodo: (id: string) => void;
};

const RemoveCompleted: React.SFC<Props> = ({
  onRemoveCompletedTodo,
  id,
  todos
}) => {
  return (
    <>
      {todos.map(todo => todo.completed === true) ? (
        <div onClick={() => onRemoveCompletedTodo(id)}>
          click to remove completed to do!
        </div>
      ) : null}
    </>
  );
};

export { RemoveCompleted };
