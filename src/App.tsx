import * as React from "react";
import { ListContainer } from "./containers/ListContainer";
import { InputContainer } from "./containers/InputContainer";
import { HelloLaura } from "./components/HelloLaura";

class App extends React.Component {
  public render() {
    return (
      <>
        <HelloLaura />
        <InputContainer />
        <ListContainer />
      </>
    );
  }
}

export default App;
