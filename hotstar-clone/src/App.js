import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Details } from "./Components/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
