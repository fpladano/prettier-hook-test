import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const title = 'Counter'

  function addToCounterHandler (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) 
  {
    setCount( count + 1 )
  }

  const substractCounterHanlder = ( event:React.MouseEvent<HTMLButtonElement, MouseEvent> ) => setCount(count -1 )

  return (
    <div className="App">
    <h1>{title}</h1>
    <h2>{count}</h2>
    <div>
    <button onClick={addToCounterHandler}> ADD</button>

    </div>
    <div>
    <button onClick={ substractCounterHanlder }>SUBSTRACT </button>
    </div>
    </div>
  );
}

export default App;
