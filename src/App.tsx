import * as React from "react";
import useSWR from "swr";
import { fetch } from "src/client";
import { TodoT } from "src/types/Todo";
import { InputContainer } from "./containers/InputContainer";
import { HelloLaura } from "./components/HelloLaura";
import { List } from "./components/ListTodo/List";
import { AnalysisTodo } from "./components/AnalysisTodo";

const App: React.FC = () => {
  const { data, error } = useSWR<Array<TodoT>>("/todo", fetch);

  if (error) {
    return <div>error!</div>;
  }

  if (!data) {
    return <div>loading!</div>;
  }

  return (
    <>
      <HelloLaura />
      <AnalysisTodo todos={data} />
      <InputContainer />
      <List todos={data} onRemove={() => console.log("ciaone")} onToggle={() => console.log("ciaone")} />
    </>
  );
};

export default App;
