import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client'; 
function Counter() { 
    const [count, setCount] = useState(0); 
    const increment = () => 
    setCount(count + 1); 
}; 
return ( 
    <div style={{ textAlign: 'center', marginTop: '50px' }}> 
    <h1 style={{ color: 'blue' }}>Counter: {count}</h1> 
    <button onClick={increment}>Increment</button> 
    </div> 
); 
const root = 
ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Counter />); 
