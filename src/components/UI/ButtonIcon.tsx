import * as React from "react";
import styled from "styled-components";
import { Icon, IconName } from "./Icon";

const Label = styled.h4`
  color: var(--dark-grey);
  font-size: 12px;
  /* position: relative;
  bottom: -2px; */
  margin-left: 5px;
  user-select: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface Props {
  iconName: IconName;
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const ButtonIcon: React.FC<Props> = ({ iconName, label, style, onClick }) => {
  return (
    <Wrapper onClick={onClick} style={style}>
      <Icon name={iconName} color="var(--dark-grey)" />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export { ButtonIcon };
