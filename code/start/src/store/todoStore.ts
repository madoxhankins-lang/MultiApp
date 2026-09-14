import { create } from 'zustand';

export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

type TodoStore = {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	addTodo: (text) => {
		const trimmedText = text.trim();
		if (!trimmedText) return;

		set((state) => ({
			todos: [...state.todos, { id: crypto.randomUUID(), text: trimmedText, completed: false }],
		}));
	},
	toggleTodo: (id) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		})),
	deleteTodo: (id) =>
		set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
