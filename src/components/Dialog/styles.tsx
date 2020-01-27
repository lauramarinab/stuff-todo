import styled, { css } from "styled-components";
import { TitleSection } from "../ListTodo/styles";

const Bkg = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bbcf95;
  z-index: 10;
  opacity: 0.6;
`;

const Portal = styled.div<{ fullScreen?: boolean }>`
  position: fixed;
  min-width: 260px;
  min-height: 180px;
  padding: 20px;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  touch-action: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 15;
  border-radius: 4px
    ${props =>
      props.fullScreen &&
      css`
        width: 100vw;
        height: 100vh;
      `};
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CategoryName = styled(TitleSection)`
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export { Bkg, Portal, ButtonWrapper, CategoryName, Wrapper };
