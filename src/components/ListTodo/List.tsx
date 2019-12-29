import * as React from "react";
import { groupBy, omit, orderBy } from "lodash";
import { TodoT } from "./../../types/Todo";
import { TitleSection, GridList } from "./styles";
import { ListBox } from "./ListBox";
import { Todo } from "./Todo";

const CATEGORY_NAME = "category_name";

interface Props {
  todos: TodoT[];
  onComplete: (id: string, completed: boolean) => void;
  onTrash: (id: string) => void;
  onEditDescription: (id: string, description: string) => void;
}

const List: React.FC<Props> = ({ todos, onComplete, onTrash, onEditDescription }) => {
  const allTodosGroupByCategoryName = groupBy(orderBy(todos, CATEGORY_NAME), CATEGORY_NAME);

  const notCategorizedTodos = allTodosGroupByCategoryName["Tutte"];
  const onlyCategorizedTodos = omit(allTodosGroupByCategoryName, "Tutte");

  const todosGroupByCategories = Object.values(onlyCategorizedTodos);

  return (
    <div style={{ marginTop: 50 }}>
      <TitleSection>All to do</TitleSection>
      <div style={{ marginTop: 10, width: "460px" }}>
        {notCategorizedTodos.map(todo => (
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
      <GridList>
        {todosGroupByCategories.map((todos, i) => (
          <ListBox
            key={i}
            todos={todos}
            onComplete={onComplete}
            onTrash={onTrash}
            onEditDescription={onEditDescription}
          />
        ))}
      </GridList>
    </div>
  );
};

export { List };
