import * as React from "react";
import { groupBy, orderBy } from "lodash";
import { TodoT, TodoActions } from "./../../types/Todo";
import { GridList } from "./styles";
import { ListBox } from "./ListBox";
import { v4 } from "uuid";
import { ListDialog } from "../ListDialog";

const CATEGORY_NAME = "category_name";

type Props = TodoActions & {
  todos: TodoT[];
  onCreateTodo: (description: string, categoryId: number | null) => void;
};

const List: React.FC<Props> = ({ todos, onComplete, onTrash, onEditDescription, onCreateTodo }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState<Array<TodoT> | null>();

  const onCloseDialog = () => setOpenDialog(false);

  const allTodosGroupByCategoryName = groupBy(orderBy(todos, CATEGORY_NAME), CATEGORY_NAME);

  const todosGroupByCategories = Object.values(allTodosGroupByCategoryName);

  return (
    <>
      {openDialog && selectedList && (
        <ListDialog
          open={openDialog}
          onClose={onCloseDialog}
          todos={selectedList}
          onComplete={onComplete}
          onTrash={onTrash}
          onEditDescription={onEditDescription}
          onCreateTodo={onCreateTodo}
        />
      )}
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
                onOpenListDialog={() => {
                  setOpenDialog(true);
                  setSelectedList(todos);
                }}
              />
            ))}
          </GridList>
        )}
      </div>
    </>
  );
};

export { List };
