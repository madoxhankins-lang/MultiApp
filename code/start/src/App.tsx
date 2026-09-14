import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;