import * as React from "react";
import styled from "styled-components";
import { TodoT } from "src/types/Todo";
import { CSSTransition } from "react-transition-group";

const AnalysisWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px 25px;
  & > span {
    font-size: 12px;
    color: var(--dark-grey);
  }

  & > span:not(:last-child)::after {
    content: "|";
    font-size: 16px;
    padding: 0px 20px;
  }

  opacity: 0;
  transition: opacity 0.3s;

  &.wrapper-entering {
    opacity: 0;
  }
  &.wrapper-entered {
    opacity: 1;
  }
  &.wrapper-exiting {
    opacity: 0;
  }
  &.wrapper-exited {
    opacity: 0;
  }
`;

type Props = {
  todos: TodoT[];
};

const perCentNotCompleted = (todos: number, notCompleted: number) => {
  if (todos > 0) {
    return ((notCompleted / todos) * 100).toFixed(0);
  }
  return "100";
};

const AnalysisTodo: React.FC<Props> = ({ todos }) => {
  const allTodos = todos.length;
  const completedTodos = todos.filter(t => t.completed).length;

  const notCompletedTodos = todos.filter(t => !t.completed).length;

  const perCent = perCentNotCompleted(allTodos, notCompletedTodos);

  return (
    <CSSTransition in={todos.length > 0} timeout={{ enter: 300, exit: 500 }}>
      {status => (
        <AnalysisWrapper className={`wrapper-${status}`}>
          <span>{`${allTodos} - to do`}</span>
          <span>{`${completedTodos} - completate`}</span>
          <span>{`${perCent}% da completare`}</span>
        </AnalysisWrapper>
      )}
    </CSSTransition>
  );
};

export { AnalysisTodo };
