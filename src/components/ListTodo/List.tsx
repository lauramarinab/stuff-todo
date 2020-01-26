import * as React from "react";
import { groupBy, orderBy } from "lodash";
import { TodoT } from "./../../types/Todo";
import { GridList } from "./styles";
import { ListBox } from "./ListBox";
import { v4 } from "uuid";

const CATEGORY_NAME = "category_name";

interface Props {
  todos: TodoT[];
  onComplete: (id: string, completed: boolean) => void;
  onTrash: (id: string) => void;
  onEditDescription: (id: string, description: string) => void;
}

const List: React.FC<Props> = ({ todos, onComplete, onTrash, onEditDescription }) => {
  const allTodosGroupByCategoryName = groupBy(orderBy(todos, CATEGORY_NAME), CATEGORY_NAME);

  const todosGroupByCategories = Object.values(allTodosGroupByCategoryName);

  return (
    <div style={{ marginTop: 50 }}>
      {todosGroupByCategories && (
        <GridList>
          {todosGroupByCategories.map(todos => (
            <ListBox
              key={v4()}
              todos={todos}
              onComplete={onComplete}
              onTrash={onTrash}
              onEditDescription={onEditDescription}
            />
          ))}
        </GridList>
      )}
    </div>
  );
};

export { List };
