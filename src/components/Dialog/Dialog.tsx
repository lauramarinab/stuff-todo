import * as React from "react";
import { createPortal } from "react-dom";
import { v4 } from "uuid";
import { useKeyUpEsc } from "../../hooks/useKeyUpEsc";
import { Bkg, Wrapper, ButtonWrapper, CategoryName, Portal } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
  categoryName: string;
  buttonSection: JSX.Element;
  wrapperStyle?: React.CSSProperties;
}

const Dialog: React.FC<Props> = ({ open, onClose, categoryName, buttonSection, wrapperStyle, children }) => {
  const el = React.useRef<HTMLDivElement>(document.createElement("div"));

  React.useEffect(() => {
    const element = el.current;

    element.setAttribute("id", v4());
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  useKeyUpEsc(onClose);

  return createPortal(
    <Wrapper>
      <Portal onClick={(e: any) => e.stopPropagation()} style={wrapperStyle}>
        <CategoryName>{categoryName}</CategoryName>
        {children}
        <ButtonWrapper>{buttonSection}</ButtonWrapper>
      </Portal>
      <Bkg open={open} onClick={onClose} />
    </Wrapper>,

    el.current
  );
};

export { Dialog };
