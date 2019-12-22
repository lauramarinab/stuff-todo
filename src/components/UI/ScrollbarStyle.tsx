import { css } from "styled-components";

const scrollbarHorizontalStyle = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #999999;
    height: 3px;
  }
  ::-webkit-scrollbar-corner {
    display: none;
    height: 0px;
    width: 0px;
  }
`;

const scrollbarVerticalStyle = css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background: var(--light-salmon);

    /* -webkit-box-shadow: inset 0 0 6px var(--dark-salmon); */
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--dark-salmon);
  }
  ::-webkit-scrollbar-corner {
    display: none;
    height: 0px;
    width: 0px;
  }
`;

export { scrollbarHorizontalStyle, scrollbarVerticalStyle };
