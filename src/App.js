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
          <h1>Design Engineer</h1>
          <h3>GumGum</h3>
          <p>2018 - Current</p>
        </div>
        <div className="item">
          <div className="project">
            <h5>Description</h5>
            <p className="project-info">
              As a Product Design Engineer at GumGum, my days are spent working
              on the UX/UI of our internal and external web applications.
            </p>
            <h5>Projects</h5>
            <ol>
              <li>Ad Manager 2.0 | UX/UI</li>
              <li>Verity Dashboard & User Portal | UX/UI</li>
              <li>Design System | Web Developer</li>
              <li>Marketing Game App | Web Developer</li>
            </ol>
            <h5>Tools</h5>
            <ol>
              <li>React.js</li>
              <li>GumGum Design System</li>
              <li>Firebase</li>
              <li>Netlify</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="item">Right</div>
        <div className="item stuck">
          <h1>Web Designer and Developer</h1>
          <h3>Freelance</h3>
          <p>2017 - Current</p>
        </div>
      </section>

      <section className="flex">
        <div className="item stuck align-right">
          <h1>Web Designer and Developer</h1>
          <h3>Just For Fun</h3>
          <p>2019 - Current</p>
        </div>
        <div className="item">
          <div className="project">
            <h5>Description</h5>
            <p className="project-info">
              On a dark gloomy night I visited a CVS store for a couple of
              items. During the process of checking out everything around me
              gets tuned out and my vision focuses in on the printer as it
              chirps out my receipt. It just keeps going and going... That's
              when it hits me to build an endless CVS Receipt.
            </p>
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
