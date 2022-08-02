// Step 1: Import React
import * as React from "react";
import { Helmet } from "react-helmet";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <script
          async="async"
          src="https://eu-consent-icon-dev-sf.truste-svc.net/notice?domain=weather.com&locale=en&js=nj&noticeType=bb&country=gb&text=true&gtm=1"
          crossOrigin=""
          data-react-helmet="true"
        />
      </Helmet>
      <div id="teconsent"></div>
      <div id="consent_blackbar"></div>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
