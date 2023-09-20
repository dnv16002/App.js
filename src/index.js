//APP.js
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <p>Created by Nikhil.</p>
      <p>Copyright {currentYear}.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
