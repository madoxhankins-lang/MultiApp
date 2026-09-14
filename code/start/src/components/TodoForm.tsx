import { FormEvent, useState } from 'react';
import { useTodoStore } from '../store/todoStore';

function TodoForm() {
	const [text, setText] = useState('');
	const addTodo = useTodoStore((state) => state.addTodo);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!text.trim()) return;
		addTodo(text);
		setText('');
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="new-todo">New task</label>
			<input id="new-todo" type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="What needs doing?" autoComplete="off" />
			<button type="submit">Add task</button>
		</form>
	);
}

export default TodoForm;
