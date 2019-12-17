import * as React from "react";
import useSWR, { trigger } from "swr";
import { fetch } from "./client";
import { TodoT } from "./types/Todo";
import { HelloLaura } from "./components/HelloLaura";
import { List } from "./components/ListTodo/List";
import { AnalysisTodo } from "./components/AnalysisTodo";
import client from "./client";
import { Input } from "./components/Input/Input";

const App: React.FC = () => {
  const { data, error } = useSWR<Array<TodoT>>("/todo", fetch);

  const onTrash = async (id: string) => {
    try {
      await client.patch(`/todo/${id}`, { trash: true });
      trigger("/todo");
    } catch (err) {
      console.log(err);
    }
  };

  const onComplete = async (id: string, completed: boolean) => {
    try {
      await client.patch(`/todo/${id}`, { completed });
      trigger("/todo");
    } catch (err) {
      console.log(err);
    }
  };

  const onCreateTodo = async (description: string) => {
    try {
      await client.post("/todo/", { description });
      trigger("/todo");
    } catch (err) {
      console.log(err);
    }
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
