
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
   <Counter></Counter>
   <Counter2></Counter2>
    </div>
  );
}


// Counter 1 ************************************************

function Counter(){

  // The value that can always be seen or initialized will be displayed as soon as useState() gives it.

  const [count, setCount] = useState(0);

 const increaseCount = () => setCount (count + 1);
 const decreaseCount = () => setCount (count - 1);


  return (
  <div>

   <h1>Count:{count}</h1>
   <button onClick={increaseCount}>Increase</button>
   <button onClick={decreaseCount}>Decrease</button>



  </div>
    )
}


// Counter 2 ************************************************


function Counter2 (){

  const [counter, setCounter] = useState(0);

  const plusButton = () => setCounter ( counter + 1);
  const minusButton = () => setCounter ( counter - 1);
  return(
    <div>

   <h1>Count:{counter}</h1>
   <button onClick={plusButton}> + </button>
   <button onClick={minusButton}> - </button>


    </div>
  )
}


export default App;
