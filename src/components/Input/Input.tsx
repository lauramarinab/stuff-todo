import * as React from "react";
import { InputStyled, InputWrapper } from "./styles";
import { AllCategoryBox } from "../AllCategoryBox";

const plus = require("../../assets/icon/plus.svg");
const pallino = require("../../assets/icon/pallino.svg");

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
        {showAddButton && <img src={pallino} alt="" />}
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
        {showAddButton && <img alt="" src={plus} style={{ cursor: "pointer" }} onClick={onCreate} />}
      </InputWrapper>
      <AllCategoryBox
        onSelectedCategory={categoryId => setSelectedCategory(categoryId)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export { Input };
