import React, { useRef, useLayoutEffect } from "react";
import "./App.css";

const isBrowser = typeof window !== `undefined`;

function App() {
  return (
    <div className="layout">
      <h1>This is the example</h1>
    </div>
  );
}

export default App;
