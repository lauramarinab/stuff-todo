import * as React from "react";
import styled from "styled-components";

const Hello = styled.h2`
  font-size: 50px;
  color: var(--primary-salmon);
`;

const HelloLaura: React.SFC<{}> = ({}) => {
  return <Hello>Hello Laura!</Hello>;
};

export { HelloLaura };
