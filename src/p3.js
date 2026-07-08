import React, { useState } from "react"; 
function App() { 
const [loggedIn, setLoggedIn] = useState(false); 
return ( 
<div> 
<h1>Conditional Rendering</h1> 
{ 
} 
<button 
onClick={() => setLoggedIn(!loggedIn)} 
> 
Toggle 
</button> 
</div> 
); 
} 
export default App;