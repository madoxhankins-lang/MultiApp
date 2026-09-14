import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import TodoList from './TodoList';
import { useTodoStore } from '../store/todoStore';

describe('TodoList', () => {
  beforeEach(() => {
    useTodoStore.setState({
      todos: [{ id: 'todo-1', text: 'Submit assignment', completed: false }],
    });
  });

  it('toggles and deletes a task', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByRole('button', { name: 'Mark complete: Submit assignment' }));
    expect(useTodoStore.getState().todos[0].completed).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'Delete Submit assignment' }));
    expect(useTodoStore.getState().todos).toEqual([]);
  });
});