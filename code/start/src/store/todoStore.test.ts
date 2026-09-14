import { beforeEach, describe, expect, it } from 'vitest';
import { useTodoStore } from './todoStore';

describe('todoStore', () => {
	beforeEach(() => {
		useTodoStore.setState({ todos: [] });
	});

	it('adds trimmed todos and ignores blank text', () => {
		useTodoStore.getState().addTodo('  Plan the week  ');
		useTodoStore.getState().addTodo('   ');

		expect(useTodoStore.getState().todos).toHaveLength(1);
		expect(useTodoStore.getState().todos[0]).toMatchObject({ text: 'Plan the week', completed: false });
	});

	it('toggles and deletes a todo', () => {
		useTodoStore.getState().addTodo('Read chapter two');
		const todo = useTodoStore.getState().todos[0];

		useTodoStore.getState().toggleTodo(todo.id);
		expect(useTodoStore.getState().todos[0].completed).toBe(true);

		useTodoStore.getState().deleteTodo(todo.id);
		expect(useTodoStore.getState().todos).toEqual([]);
	});
});
