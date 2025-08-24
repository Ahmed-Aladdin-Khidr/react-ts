import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypeScript', 'Learn Next.js']} />
    </div>
  );
}

export default App;
