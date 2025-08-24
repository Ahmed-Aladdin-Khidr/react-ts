import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './components/store/todos-context';
import './App.css';

function App() {

  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
