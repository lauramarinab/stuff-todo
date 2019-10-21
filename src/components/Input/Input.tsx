import * as React from "react";
import { InputStyled, InputWrapper } from "./styles";

const plus = require("../../assets/icon/plus.svg");
const pallino = require("../../assets/icon/pallino.svg");

interface Props {
  value: string;
  showAddButton: boolean;
  onChangeInput: (value: string) => void;
  onAddTodo: (description: string) => void;
  toggleAddButton: (show: boolean) => void;
}

const Input: React.FC<Props> = ({ value, showAddButton, onChangeInput, onAddTodo, toggleAddButton }) => {
  return (
    <InputWrapper>
      {showAddButton && <img src={pallino} />}
      <InputStyled
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value)}
        placeholder="Cosa devi fare oggi?"
        onKeyPress={e => (e.key === "Enter" && value !== "" ? onAddTodo(value) : null)}
        onFocus={() => toggleAddButton(true)}
        onBlur={() => value === "" && toggleAddButton(false)}
        showAddButton={showAddButton}
      />
      {showAddButton && <img src={plus} onClick={() => value !== "" && onAddTodo(value)} />}
    </InputWrapper>
  );
};

export { Input };
