import styled from "styled-components";

const InputStyled = styled.input<{ showAddButton: boolean } & React.HTMLProps<HTMLInputElement>>`
  height: 40px;
  border: none;
  font-size: 20px;
  padding: 20px 0px;
  color: var(--dark-grey);
  width: 100%;
  margin-left: ${props => (props.showAddButton ? 15 : 0)}px;
  transition: margin 0.5s;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--light-grey);
  }
  &:placeholder-shown {
    font-size: 20px;
    padding: 20px 0px;
    margin-left: ${props => (props.showAddButton ? 15 : 0)}px;
    transition: margin 0.4s;
  }
`;

const InputWrapper = styled.div`
  border-bottom-width: 2px;
  border-bottom-color: var(--medium-grey);
  border-bottom-style: solid;
  width: 460px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { InputStyled, InputWrapper };
