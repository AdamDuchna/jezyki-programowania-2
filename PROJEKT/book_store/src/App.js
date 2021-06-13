import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import "./App.scss";
import BookDetail from "./FormAndDetail/DetailedView/BookDetail";
import AddEditBook from "./FormAndDetail/Form/AddEditBook.js";
import { useState } from "react";
function App() {
  const [burgerState, setBurger] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar setBurger={setBurger} isMain={true} />
          </Route>
          <Route path="/:rest">
            <Navbar setBurger={setBurger} isMain={false} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/details/:id" component={BookDetail} />
          <Route path="/edit/:id" exact component={AddEditBook} />
          <Route path="/create" exact component={AddEditBook} />
          <Route path="/" exact>
            <Mainpage burgerState={burgerState} />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
