export enum actions {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  ONCHANGE_INPUT = "ONCHANGE_INPUT",
  REMOVE_COMPLETED_TODO = "REMOVE_COMPLETED_TODO",
  TOGGLE_ADD_BUTTON = "TOGGLE_ADD_BUTTON"
}

export const addTodo = (description: string) => ({
  description,
  type: actions.ADD_TODO
});

export const toggleTodo = (id: string) => ({
  id,
  type: actions.TOGGLE_TODO
});

export const removeTodo = (id: string) => ({
  id,
  type: actions.REMOVE_TODO
});

export const onChangeTodoInput = (value: string) => ({
  value,
  type: actions.ONCHANGE_INPUT
});

export const removeCompletedTodo = () => ({
  type: actions.REMOVE_COMPLETED_TODO
});

export const toggleAddButton = (show: boolean) => ({
  show,
  type: actions.TOGGLE_ADD_BUTTON
});
