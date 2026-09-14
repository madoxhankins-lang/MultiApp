import { useTodoStore } from '../store/todoStore';

function TodoList() {
	const todos = useTodoStore((state) => state.todos);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const deleteTodo = useTodoStore((state) => state.deleteTodo);

	if (todos.length === 0) {
		return <div className="empty-state" role="status"><span className="empty-mark" aria-hidden="true">+</span><p>Your list is clear.</p><span>Add a task above to get started.</span></div>;
	}

	return (
		<ul className="todo-list" aria-label="Tasks">
			{todos.map((todo) => (
				<li className={`todo-item${todo.completed ? ' is-complete' : ''}`} key={todo.id}>
					<button className="check-button" type="button" onClick={() => toggleTodo(todo.id)} aria-label={`${todo.completed ? 'Mark incomplete' : 'Mark complete'}: ${todo.text}`} aria-pressed={todo.completed}>{todo.completed ? '✓' : ''}</button>
					<span className="todo-text">{todo.text}</span>
					<button className="delete-button" type="button" onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
