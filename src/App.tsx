import * as React from "react";
import { ListContainer } from "./containers/ListContainer";
import { InputContainer } from "./containers/InputContainer";
import { HelloLaura } from "./components/HelloLaura";
import { AnalysisTodoContainer } from "./containers/AnalysisTodoContainer";

class App extends React.Component {
  public render() {
    return (
      <>
        <HelloLaura />
        <AnalysisTodoContainer />
        <InputContainer />
        <ListContainer />
      </>
    );
  }
}

export default App;
