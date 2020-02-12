import React from "react";

function App() {
  return (
    <div className="app">
      <header>
        <div className="">
          <h1>GarrettBear</h1>
          <h5>Product Design Engineer</h5>
        </div>
      </header>
      <section className="flex">
        <div className="item stuck align-right">
          <h1>Ad Manager 2.0</h1>
          <h3>GumGum</h3>
          <p>UX/UI</p>
        </div>
        <div className="item long">
          <div className="project-info">
            <ol>
              <li>this is an item</li>
              <li>this is an item</li>
              <li>this is an item</li>
              <li>this is an item</li>
              <li>this is an item</li>
              <li>this is an item</li>
              <li>this is an item</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="item long">Right</div>
        <div className="item stuck">
          <h1>Ad Manager 2.0</h1>
          <h3>GumGum</h3>
          <p>UX/UI</p>
        </div>
      </section>

      <section className="flex">
        <div className="item stuck">Left</div>
        <div className="item long">Right</div>
      </section>

      <section>
        <div className="container">
          <div className="overlay">
            <div className="overlay--inner">This is the inner</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="overlay">
            <div className="overlay--inner">This is the inner</div>
          </div>
        </div>
      </section>

      <footer>
        <h1>GarrettBear</h1>
      </footer>
    </div>
  );
}

export default App;
