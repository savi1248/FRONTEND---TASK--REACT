import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home  from './Components/Home';


const e1= document.getElementById('root');
const root = ReactDOM.createRoot(e1);
const  App = () =>{
  return(
     <div>
        <Home />
     </div>
  );
}
root.render(<App />);
