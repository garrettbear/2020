import React from "react";

function App() {
  return (
    <div className="app">
      <header>
        <div className="header-logo">
          <h1>GarrettBear</h1>
          <h6>Product Design Engineer</h6>
        </div>
      </header>
      <section className="flex">
        <div className="item stuck align-right">
          <h1>Design Engineer</h1>
          <h3>GumGum</h3>
          <p>2018 - Current</p>
        </div>
        <div className="item long">
          <div className="project">
            <h5 className="project-title">Description</h5>
            <p className="project-info">
              As a Product Design Engineer at GumGum, my days are spent working
              on the UX/UI of our internal and external web applications.
            </p>
            <h5 className="project-title">Projects</h5>
            <ul>
              <li>Ad Manager 2.0 | UX/UI</li>
              <li>Verity Dashboard & User Portal | UX/UI</li>
              <li>Design System | Web Developer</li>
              <li>Marketing Game App | Web Developer</li>
            </ul>
            <h5 className="project-title">Tools</h5>
            <ul>
              <li>React.js</li>
              <li>GumGum Design System</li>
              <li>Firebase</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="item stuck align-right">
          <h1>Web Designer & Developer</h1>
          <h3>Freelance</h3>
          <p>2017 - Current</p>
        </div>
        <div className="item long">
          <div className="project">
            <h5 className="project-title">Description</h5>
            <p className="project-info">
              Leveraging my skills as a web developer and experience in
              e-commerce. Some of my free time is spent on a couple of freelance
              projects.
            </p>
            <h5 className="project-title">Projects</h5>
            <ul>
              <li>
                <a
                  href="https://goodies.la/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Goodies
                </a>
              </li>
              <li>
                <a
                  href="https://pasadenaleisureclub.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Pasadena Leisure Club
                </a>
              </li>
              <li>
                <a
                  href="https://pkwy.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PKWY
                </a>
              </li>
              <li>
                <a
                  href="https://mambaonthree.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MambaOnThree
                </a>
              </li>
              <li>
                <a
                  href="https://mambasportsfoundation.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Mamba Sports Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://www.yourladysfavoritebarber.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Your Lady's Favorite Barber
                </a>
              </li>
              <li>
                <a
                  href="https://novaartla.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Nova Art
                </a>
              </li>
              <li>
                <a
                  href="https://201lab.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  201 Lab
                </a>
              </li>
            </ul>
            <h5 className="project-title">Tools</h5>
            <ul>
              <li>React.js</li>
              <li>Shopify</li>
              <li>Google Analytics</li>
              <li>Netlify</li>
              <li>Squarespace</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="item stuck align-right">
          <h1>Web Designer & Developer</h1>
          <h3>Just For Fun</h3>
          <p>2017 - Current</p>
        </div>
        <div className="item long">
          <div className="project">
            <h5 className="project-title">Description</h5>
            <p className="project-info">
              On a dark gloomy night I visited a CVS store for a couple of
              items. During the process of checking out everything around me
              gets tuned out and my vision focuses in on the printer as it
              chirps out my receipt. It just keeps going and going... That's
              when it hits me to build an endless CVS Receipt.
            </p>
            <h5 className="project-title">Project</h5>
            <ul>
              <li>
                <a
                  href="https://codepen.io/garrettbear/full/JzMmqg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CVS Receipt
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/garrettbear/CVScraper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CVScraper
                </a>
              </li>
            </ul>
            <h5 className="project-title">Mentions</h5>
            <ul>
              <li>
                <a
                  href="https://codepen.io/2019/popular/pens/8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #26 of Top 100 Most Hearted CodePen 2019
                </a>
              </li>
              <li>
                <a
                  href="https://syntax.fm/show/134/syntax-live-react-edition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SyntaxFM Podcast (10:00)
                </a>
              </li>
              <li>
                <a
                  href="https://blog.codepen.io/2020/01/08/250-the-most-hearted-of-2019/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodePen Radio Podcast (17:20)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="resume">
        <a
          href="https://drive.google.com/file/d/11_1VYxABfAGvCNzPHML7hpmHJ1SMW89O/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <i class="fas fa-file resume-icon"></i>Resume
        </a>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/gwhisten/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <div className="link-icon--wrapper">
              <i class="fab fa-linkedin"></i>
            </div>
          </a>
          <a
            href="https://www.instagram.com/garrettbear/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <div className="link-icon--wrapper">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
          <a
            href="https://codepen.io/garrettbear"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <div className="link-icon--wrapper">
              <i class="fab fa-codepen"></i>
            </div>
          </a>
          <a
            href="https://dribbble.com/garrettbear"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <div className="link-icon--wrapper">
              <i class="fab fa-dribbble"></i>
            </div>
          </a>
        </div>
      </section>
      <footer>
        © 2020 GarrettBear{" "}
        <a href="https://old.garrettbear.com/">Old Portfolio</a>
      </footer>
    </div>
  );
}

export default App;
