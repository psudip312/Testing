import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from '../useCounter'
function App() {
  // question? difference between hook and function 
  // hook ma euta app ko life cycle use garna paucha hook more efficient huncha .. function bhitra state haru use garna paudaina tara hook ma chai huncha

// TO CREATE A HOOK or custom hook 

const {count,increment,decrement}=useCounter();

  return (
    <>
<h1>Counter app</h1>
<p>Count : {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
