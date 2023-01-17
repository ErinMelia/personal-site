import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/portfolioImage.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Erin Melia</h2>
        <p><a href="mailto:prax.melia@gmail.com">prax.melia@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Erin. I like building things.
        I am a sophomore at the University of Massachusetts Amherst.
        I have worked in the <a href="https://groups.cs.umass.edu/reml/">REML Lab</a> at UMass Amherst.
        I love to read, sew, come up with complicated riddles, and listen to Billy Joel.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;  Erin Melia <Link to="/">https://ErinMelia.github.io/personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
