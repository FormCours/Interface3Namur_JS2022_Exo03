import './App';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <Counter incr={3} />
    </div>
  );
}

export default App;
