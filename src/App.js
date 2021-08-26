import Home from './components/home'
import Dropzone from './components/home/Dropzone'
import {BrowserRouter as Router,Route  } from "react-router-dom";
//import Logger from '../node_modules/alphaman/Logger'
function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/dropzone" exact component={Dropzone}/>
    </Router>
    </div>
  );
}

export default App;
