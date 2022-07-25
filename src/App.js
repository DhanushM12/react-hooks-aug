
import './App.css';
import UseCallback from './hooks/UseCallback';
import UseContext from './hooks/UseContext';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>React hooks</h1>
      <UseState />
      <br /><br />
      <UseEffect />
      <br /><br />
      <UseRef />
      <br /><br />
      <UseMemo />
      <br /><br />
      <UseCallback />
      <br /><br />
      <UseContext />
    </div>
  );
}

export default App;
