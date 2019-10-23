import styled from "styled-components";

const TitleSection = styled.div`
  color: var(--dark-salmon);
  font-size: 15px;
  background: white;
  z-index: 1;
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
  justify-content: space-between;
  z-index: 0;
  position: relative;

  opacity: 0;
  left: -600px;
  transition: opacity 0.3s, left 0.4s;

  &.wrapper-entering {
    opacity: 0;
    left: -600px;
  }
  &.wrapper-entered {
    opacity: 1;
    left: 0px;
  }
  &.wrapper-exting {
    opacity: 0;
    left: -600px;
  }
  &.wrapper-exited {
    opacity: 0;
    left: -600px;
  }
`;

const TextTodo = styled.span<{ completed: boolean }>`
  color: var(--dark-grey);
  font-size: 15px;
  margin-left: 10px;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

export { TitleSection, TodoWrapper, TextTodo };
