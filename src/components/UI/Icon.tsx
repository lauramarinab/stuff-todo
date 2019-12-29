import * as React from "react";
import styled, { css } from "styled-components";

type IconName = "remove" | "add" | "check-on" | "check-off";

interface Props {
  name: IconName;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const I = styled.i<{ color?: string; onClick?: () => void }>`
  position: relative;
  color: ${props => (props.color ? props.color : "var(--medium-grey)")};
  font-size: 25px;
  height: 25px;
  line-height: 25px;

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

export const Icon: React.FC<Props & React.HTMLProps<HTMLLIElement>> = ({ name, onClick, style, color, className }) => {
  return <I className={`icon-${name} icon-m ${className}`} onClick={onClick} style={style} color={color} />;
};
