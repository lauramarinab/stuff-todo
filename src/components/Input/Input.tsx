import * as React from "react";
import { InputStyled, InputWrapper } from "./styles";

const plus = require("../../assets/icon/plus.svg");
const pallino = require("../../assets/icon/pallino.svg");

interface Props {
  onCreateTodo: (description: string) => void;
}

const Input: React.FC<Props> = ({ onCreateTodo }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [showAddButton, setShowAddButton] = React.useState<boolean>(false);

  const onCreate = () => {
    if (inputValue !== "") {
      onCreateTodo(inputValue);
      setInputValue("");
    } else {
      console.log("Devi scrivere un'attività prima di creare un todo");
    }
  };

  return (
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
  );
};

export { Input };
