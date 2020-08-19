import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home"; 

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
