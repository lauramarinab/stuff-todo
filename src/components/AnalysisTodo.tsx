import * as React from "react";
import { TodoT } from "src/types/Todo";
import styled from "styled-components";

const AnalysisWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px 40px;
  & > span {
    font-size: 12px;
    color: var(--dark-grey);
  }

  & > span:not(:last-child)::after {
    content: "|";
    font-size: 16px;
    padding: 0px 20px;
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

const AnalysisTodo: React.SFC<Props> = ({ todos }) => {
  const allTodos = todos.length;
  const completedTodos = todos.filter(t => t.completed).length;

  const notCompletedTodos = todos.filter(t => !t.completed).length;

  const perCent = perCentNotCompleted(allTodos, notCompletedTodos);

  return (
    <AnalysisWrapper>
      <span>{`${allTodos} - to do`}</span>
      <span>{`${completedTodos} - completate`}</span>
      <span>{`${perCent}% da completare`}</span>
    </AnalysisWrapper>
  );
};

export { AnalysisTodo };
