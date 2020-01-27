import * as React from "react";
import { InputStyled, InputWrapper } from "./styles";
import { Icon } from "../UI/Icon";

interface Props {
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  onCreate: () => void;
  placeholder?: string;
}

const AddSimpleTodo: React.FC<Props> = ({ inputValue, onChangeInputValue, onCreate, placeholder }) => {
  const [showAddButton, setShowAddButton] = React.useState<boolean>(true);

  return (
    <InputWrapper>
      {showAddButton && <Icon name="check-off" />}
      <InputStyled
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputValue(e.target.value)}
        placeholder={placeholder || "Cosa devi fare oggi?"}
        onKeyPress={e => e.key === "Enter" && onCreate()}
        onFocus={() => setShowAddButton(true)}
        onBlur={() => inputValue === "" && setShowAddButton(false)}
        showAddButton={showAddButton}
      />
      {showAddButton && <Icon name="add" onClick={onCreate} />}
    </InputWrapper>
  );
};
export { AddSimpleTodo };
