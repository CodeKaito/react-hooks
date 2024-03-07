import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Card name="Alex" surname="Rossi" age={["Hello", " World"]} />
    </div>
  );
}

export default App;
