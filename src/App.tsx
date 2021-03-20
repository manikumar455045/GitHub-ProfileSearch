import React from 'react';
import GitHubSearchPanel from "./Components/GitHubSearchPanel";

import "./App.css";

let App  = () => {
  return (
    <React.Fragment>
     <nav className="navbar navbar-dark bg-dark navbar-expand-md">
         <div className="container">
         <a href="/" className="navbar-brand font-weight-bold">GitHub Profile Search</a>
         </div>
     </nav>
        <GitHubSearchPanel />
        </React.Fragment>
  );
}

export default App;
