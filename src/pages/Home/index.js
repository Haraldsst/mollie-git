import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>
      Hi there{' '}
      <span role="img" aria-label="waving emoji">
        👋
      </span>
    </h1>
    <p>
      Thanks for taking the time to interview at Mollie. This assigment will be
      used by us to assess your technical skills. It will also give us something
      to talk about should you progress to the technical interview.
    </p>
    <p>
      It should take you about 4 hours to complete all exercises. If you’re
      stuck on a problem, try to work around it or come to it back later. When
      reviewing, we will focus on intent more than on implementation details.
    </p>
    <p>
      We advice you to read through all the excercises before starting. This
      will help you make informed technical decisions as you go through them.
    </p>
    <h3>Good to know</h3>
    <ul>
      <li>
        This assignment was built on top of{' '}
        <a
          href="https://facebook.github.io/create-react-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </a>
        , see their{' '}
        <a
          href="https://facebook.github.io/create-react-app/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{' '}
        should you run into any technical issues.
      </li>
      <li>
        Routing is handled by{' '}
        <a
          href="https://reacttraining.com/react-router/web/guides/quick-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>
        .
      </li>
      <li>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sass
        </a>{' '}
        is supported in the project, but feel free to use vanilla CSS if you
        prefer.
      </li>
      <li>You can ignore older browsers.</li>
    </ul>
    <hr />
    <h2>Exercise 1: Fetching data</h2>
    <p>
      Make sure payments are fetched from the API on the{' '}
      <Link to="/payments">payments page</Link>. You will find the code in{' '}
      <code>src/pages/Payments/Overview/index.js</code>. This exercise does not
      prescribe a way of storing data, you can store the payments on the client
      however you feel is best.
    </p>
    <hr />
    <h2>Exercise 2: Implement payments table</h2>
    <p>
      In the root of this project you will find{' '}
      <code>PaymentsTableDesktop.png</code> and{' '}
      <code>PaymentsTableMobile.png</code>. Your task is to implement these
      designs and render the payments you fetched in the previous exercise to
      the screen.
    </p>
    <h3>Requirements</h3>
    <ul>
      <li>The design should be responsive.</li>
      <li>
        The design needs to resemble the PNG, but pixel perfection is not
        expected.
      </li>
      <li>
        Each row should link to a detail page, the route for which is{' '}
        <code>/payments/:id</code>.
      </li>
    </ul>
    <hr />
    <h2>Exercise 3: Implement payment detail page</h2>
    <p>
      Fetch the payment from the API if needed and render it on the screen. A
      view component is already provided.
    </p>
    <h3>Requirements</h3>
    <ul>
      <li>
        Fetch the payment only if it wasn’t fetched before, or if it was fetched
        over 5 minutes ago. Implement this same logic for the customer detail
        page.
      </li>
      <li>Make sure to implement correct loading states.</li>
      <li>
        The user should be able to click through to the customer detail page, a
        view for this is already provided.
      </li>
    </ul>
  </div>
);

export default Home;
