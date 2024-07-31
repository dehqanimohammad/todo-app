export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  recentlyDeleted: Todo | null;
}
