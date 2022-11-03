import * as React from 'react';
import './style.css';

export default function App() {
  const [state,setState]=React.useState(0)

  function inc(){
   setState(state+1)
  }
  function de(){
    setState(state-1)
   }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <label>{state}</label>
      
      <button onClick={inc}>Increment</button>
      <button onClick={de}>Decrement</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
