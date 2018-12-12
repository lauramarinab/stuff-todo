import * as React from "react";
import { InputStyled, InputWrapper } from "./style";

const plus = require("../../assets/icon/plus.svg");
const pallino = require("../../assets/icon/pallino.svg");

interface Props {
  onChangeInput: (value: string) => void;
  onAddTodo: (description: string) => void;
  value: string;
  removeCompletedTodo: () => void;
  toggleAddButton: (show: boolean) => void;
  showAddButton: boolean;
}

const Input: React.SFC<Props> = ({
  onChangeInput,
  onAddTodo,
  value,
  removeCompletedTodo,
  toggleAddButton,
  showAddButton
}) => {
  return (
    <>
      <InputWrapper>
        {showAddButton && <img src={pallino} />}
        <InputStyled
          type="text"
          value={value}
          onChange={e => onChangeInput(e.currentTarget.value)}
          placeholder="Cosa devi fare oggi?"
          onKeyPress={e =>
            e.key === "Enter" && value !== "" ? onAddTodo(value) : null
          }
          onFocus={() => toggleAddButton(true)}
          onBlur={() => value === "" && toggleAddButton(false)}
          showAddButton={showAddButton}
        />
        {showAddButton && (
          <img src={plus} onClick={() => value !== "" && onAddTodo(value)} />
        )}
      </InputWrapper>
      <button onClick={() => removeCompletedTodo()}>
        remove all completed to do
      </button>
    </>
  );
};

export { Input };
