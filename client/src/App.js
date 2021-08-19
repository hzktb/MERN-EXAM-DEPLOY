import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import Create from "./views/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/pets/new" />
        <Detail path="/pets/:id" />
        <Update path="/pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
