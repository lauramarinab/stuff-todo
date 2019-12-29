import styled from "styled-components";

const TitleSection = styled.h3`
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
  top: -45px;
  cursor: pointer;
  padding: 6px 13px;
  background: #ffffff;
  border-radius: 50px;
  transition: opacity 0.2s, top 0.3s, background 0.2s ease-in;

  &:hover {
    background: #f3f3f3;
  }

  &.wrapper-entering {
    opacity: 0;
    top: -45px;
  }
  &.wrapper-entered {
    opacity: 1;
    top: 0px;
  }
  &.wrapper-exting {
    opacity: 0;
    top: -45px;
  }
  &.wrapper-exited {
    opacity: 0;
    top: -45px;
  }
`;

const TextTodo = styled.div<{ completed: boolean }>`
  color: var(--dark-grey);
  font-size: 15px;
  margin-left: 10px;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  outline: none;
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export { TitleSection, TodoWrapper, TextTodo, GridList };
