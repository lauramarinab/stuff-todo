import * as React from "react";
import useSWR, { trigger } from "swr";
import { fetchData } from "./client";
import { TodoT } from "./types/Todo";
import { HelloLaura } from "./components/HelloLaura";
import { List } from "./components/ListTodo/List";
import { AnalysisTodo } from "./components/AnalysisTodo";
import client from "./client";
import { Input } from "./components/Input/Input";

const App: React.FC = () => {
  const { data, error } = useSWR<Array<TodoT>>("/todo", fetchData);

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

  const onEditDescription = async (id: string, description: string) => {
    try {
      await client.patch(`/todo/${id}`, { description });
      trigger("/todo");
    } catch (err) {
      console.log(err);
    }
  };

  const onCreateTodo = async (description: string, categoryId: number | null) => {
    try {
      await client.post("/todo/", { description, categoryId });
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
      <List
        todos={data}
        onComplete={(id, completed) => onComplete(id, completed)}
        onTrash={onTrash}
        onEditDescription={(id, description) => onEditDescription(id, description)}
      />
    </>
  );
};

export default App;
