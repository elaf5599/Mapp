import React from 'react';
import { BrowserRouter   , Routes ,Route, Link}  from "react-router-dom";
import Map from './map';
import Form from './form';

function App() {  
  return (
 
    
<Routes>
    <Route path="/" element={<Map/>}/>
    <Route path="/form" element={<Form/>}/>


</Routes>

  );
}

export default App;