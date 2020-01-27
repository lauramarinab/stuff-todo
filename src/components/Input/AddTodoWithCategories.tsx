import * as React from "react";
import { AddSimpleTodo } from "./AddSimpleTodo";
import { AllCategoryBox } from "../AllCategoryBox";

interface Props {
  onCreateTodo: (description: string, categoryId: number | null) => void;
}

const AddTodoWithCategories: React.FC<Props> = ({ onCreateTodo }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null);

  const onCreate = () => {
    if (inputValue !== "") {
      onCreateTodo(inputValue, selectedCategory);
      setInputValue("");
    } else {
      console.log("Devi scrivere un'attività prima di creare un todo");
    }
  };

  return (
    <>
      <AddSimpleTodo
        onCreate={onCreate}
        inputValue={inputValue}
        onChangeInputValue={(value: string) => setInputValue(value)}
      />
      <AllCategoryBox
        onSelectedCategory={categoryId => setSelectedCategory(categoryId)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export { AddTodoWithCategories };
