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

  return (
    <InputWrapper>
      {showAddButton && <img src={pallino} />}
      <InputStyled
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder="Cosa devi fare oggi?"
        onKeyPress={e => (e.key === "Enter" && inputValue !== "" ? onCreateTodo(inputValue) : null)}
        onFocus={() => setShowAddButton(true)}
        onBlur={() => inputValue === "" && setShowAddButton(false)}
        showAddButton={showAddButton}
      />
      {showAddButton && (
        <img
          src={plus}
          style={{ cursor: "pointer" }}
          onClick={() => {
            inputValue !== "" && onCreateTodo(inputValue);
            setInputValue("");
          }}
        />
      )}
    </InputWrapper>
  );
};

export { Input };
