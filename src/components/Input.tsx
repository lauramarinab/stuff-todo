import * as React from "react";

interface Props {
  onChangeInput: (value: string) => void;
  onAddTodo: (description: string) => void;
  value: string;
  removeCompletedTodo: () => void;
}

const Input: React.SFC<Props> = ({
  onChangeInput,
  onAddTodo,
  value,
  removeCompletedTodo
}) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => onChangeInput(e.target.value)}
      />
      <button onClick={() => onAddTodo(value)} disabled={value === ""}>
        add
      </button>
      <button onClick={() => removeCompletedTodo()}>
        remove all completed to do
      </button>
    </>
  );
};

export { Input };
