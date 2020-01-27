export type TodoT = {
  id: string;
  description: string;
  completed: boolean;
  trash: boolean;
  category_name: string;
  user_name: string;
};

export type TodoActions = {
  onComplete: (id: string, completed: boolean) => void;
  onTrash: (id: string) => void;
  onEditDescription: (id: string, description: string) => void;
};
