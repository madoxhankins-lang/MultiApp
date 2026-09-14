import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodoStore } from './store/todoStore';

function App() {
  const todos = useTodoStore((state) => state.todos);
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="app-shell">
      <section className="todo-card" aria-labelledby="page-title">
        <header className="app-header">
          <div><p className="eyebrow">Daily focus</p><h1 id="page-title">Things to do</h1></div>
          <div className="progress-stat" aria-label={`${completedCount} of ${todos.length} tasks complete`}><strong>{completedCount}</strong><span>of {todos.length} done</span></div>
        </header>
      <TodoForm />
      <TodoList />
        <footer className="app-footer"><span>{todos.length === 0 ? 'A calm place to start.' : 'Keep the momentum going.'}</span><span className="status-dot" aria-hidden="true" /></footer>
      </section>
    </main>
  );
}

export default App;