import * as React from "react";

const onKeyUp = (e: KeyboardEvent, onClose: () => any) => {
  if (e.keyCode === 27) {
    onClose();
  }
};

const useKeyUpEsc = (onClose: () => any) => {
  const onClickEsc = (e: KeyboardEvent) => onKeyUp(e, onClose);

  React.useEffect(() => {
    window.addEventListener("keyup", onClickEsc, true);

    return () => {
      window.removeEventListener("keyup", onClickEsc, true);
    };
  });
};

export { useKeyUpEsc };
