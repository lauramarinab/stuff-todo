import styled from "styled-components";

const TitleSection = styled.span`
  color: var(--dark-salmon);
  font-size: 15px;
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
  justify-content: space-between;
`;

const TextTodo = styled.span<{ completed: boolean }>`
  color: var(--dark-grey);
  font-size: 15px;
  margin-left: 10px;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

export { TitleSection, TodoWrapper, TextTodo };
