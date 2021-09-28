import "./App.css";
import HomePage from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
