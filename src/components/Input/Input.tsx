import * as React from "react";
import { InputStyled, InputWrapper } from "./styles";
import { AllCategoryBox } from "../AllCategoryBox";
import { Icon } from "../UI/Icon";

interface Props {
  onCreateTodo: (description: string, categoryId: number | null) => void;
}

const Input: React.FC<Props> = ({ onCreateTodo }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [showAddButton, setShowAddButton] = React.useState<boolean>(true);
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
      <InputWrapper>
        {showAddButton && <Icon name="check-off" />}
        <InputStyled
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          placeholder="Cosa devi fare oggi?"
          onKeyPress={e => e.key === "Enter" && onCreate()}
          onFocus={() => setShowAddButton(true)}
          onBlur={() => inputValue === "" && setShowAddButton(false)}
          showAddButton={showAddButton}
        />
        {showAddButton && <Icon name="add" onClick={onCreate} />}
      </InputWrapper>
      <AllCategoryBox
        onSelectedCategory={categoryId => setSelectedCategory(categoryId)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export { Input };
