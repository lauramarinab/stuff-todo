import * as React from "react";
import useSWR from "swr";
import { fetch } from "src/client";
import { TodoT } from "src/types/Todo";
import { HelloLaura } from "./components/HelloLaura";
import { List } from "./components/ListTodo/List";
import { AnalysisTodo } from "./components/AnalysisTodo";
import client from "src/client";
import { Input } from "./components/Input/Input";

const App: React.FC = () => {
  const { data, error } = useSWR<Array<TodoT>>("/todo", fetch);

  const onTrash = async (id: string) => {
    await client.patch(`todo/${id}`, { trash: true });
  };

  const onComplete = async (id: string, completed: boolean) => {
    await client.patch(`todo/${id}`, { completed });
  };

  const onCreateTodo = async (description: string) => {
    await client.post("todo/", { description });
  };

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
      <Input onCreateTodo={onCreateTodo} />
      <List todos={data} onComplete={onComplete} onTrash={onTrash} />
    </>
  );
};

export default App;
