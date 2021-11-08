import './App.css';
import Movielist from "./Component/Movielist"
import { BrowserRouter, Route, Link } from "react-router-dom";
import Description from './Component/Description';

function App() {
  
  return (
    <div className="App">
      
      
   
   <BrowserRouter>
   <Route exact path="/" component={Movielist} />
   <Route path='/description' component={Description}     />
   
   </BrowserRouter>
    </div>
  );
}

export default App;
