import Header from "./Components/header";
import Call from "./Components/call";
import About from "./Components/about";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Call} />
      </Switch>
    </Router>
  );
}

export default App;
