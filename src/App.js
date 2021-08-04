import React from 'react';
import Topbar from "./Components/topbar"
import Footer from './Components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/home';

// const App = () => {
//   return ( <div>
//     <Topbar />
//     <p>App</p>
//     <Footer />
//   </div> );
// }
 
// export default App;

const App = () => {
  return ( <BrowserRouter>
  <Topbar />
  <Switch>
    <Route to="/" exact component={Home} />
  </Switch>
  <Footer />
  </BrowserRouter> );}
 
export default App;