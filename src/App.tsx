import Todos from './components/Todos';
import Todo from './models/todos';
import './App.css';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Next.js'),
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
