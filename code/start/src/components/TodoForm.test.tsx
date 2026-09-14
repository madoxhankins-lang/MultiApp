import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import TodoForm from './TodoForm';
import { useTodoStore } from '../store/todoStore';

describe('TodoForm', () => {
	beforeEach(() => {
		useTodoStore.setState({ todos: [], addTodo: vi.fn(), toggleTodo: vi.fn(), deleteTodo: vi.fn() });
	});

	it('adds a task and clears the input', () => {
		render(<TodoForm />);
		const input = screen.getByLabelText('New task');

		fireEvent.change(input, { target: { value: 'Book dentist appointment' } });
		fireEvent.submit(input.closest('form')!);

		expect(useTodoStore.getState().addTodo).toHaveBeenCalledWith('Book dentist appointment');
		expect(input).toHaveValue('');
	});

	it('does not submit blank text', () => {
		render(<TodoForm />);
		fireEvent.submit(screen.getByLabelText('New task').closest('form')!);

		expect(useTodoStore.getState().addTodo).not.toHaveBeenCalled();
	});
});
