import Page from "./Componets/Page";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Page />
      </Router>
    </React.Fragment>
  );
}

export default App;
