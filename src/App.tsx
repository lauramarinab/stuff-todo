import * as React from "react";
import client from "./client";
import useSWR, { trigger, mutate } from "swr";
import { fetchData } from "./client";
import { TodoT } from "./types/Todo";
import { HelloLaura } from "./components/HelloLaura";
import { List } from "./components/ListTodo/List";
import { AnalysisTodo } from "./components/AnalysisTodo";
import { AddTodoWithCategories } from "./components/Input/AddTodoWithCategories";

const App: React.FC = () => {
  const { data, error } = useSWR<Array<TodoT>>("/todo", fetchData);

  if (error) {
    return <div>error!</div>;
  }

  if (!data) {
    return <div>loading!</div>;
  }

  const onTrash = async (id: string) => {
    try {
      await client.patch(`/todo/${id}`, { trash: true });

      const updatedTodo = data.filter(todo => todo.id !== id);

      mutate("/todo", updatedTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const onComplete = async (id: string, completed: boolean) => {
    try {
      await client.patch(`/todo/${id}`, { completed });

      const updatedTodo = data.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          };
        }
        return todo;
      });

      mutate("/todo", updatedTodo);
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
      await client.post("/todo", { description, categoryId });

      trigger("/todo");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HelloLaura />
      <AnalysisTodo todos={data} />
      <AddTodoWithCategories onCreateTodo={onCreateTodo} />
      <List
        todos={data}
        onComplete={onComplete}
        onTrash={onTrash}
        onEditDescription={onEditDescription}
        onCreateTodo={onCreateTodo}
      />
    </>
  );
};

export default App;
