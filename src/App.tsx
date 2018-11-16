import * as React from "react";
import "./App.css";
import { ListContainer } from "./containers/ListContainer";
import { InputContainer } from "./containers/InputContainer";

class App extends React.Component {
  public render() {
    return (
      <>
        <InputContainer />
        <ListContainer />
      </>
    );
  }
}

export default App;
