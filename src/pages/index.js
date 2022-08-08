// Step 1: Import React
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import Footer from "../components/footer";

// Step 2: Define your component
const IndexPage = () => {
  // useEffect(() => {
  //   const taScript = document.createElement("script");
  //   taScript.src = "https://eu-consent-icon-dev-sf.truste-svc.net/notice?domain=weather.com&locale=en&js=nj&noticeType=bb&country=gb&text=true&gtm=1";
  //   document.head.appendChild(taScript);

  //   return () => {
  //     taScript.remove();
  //   }
  // }, []);

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
      <div>GATSBY TEST PAGE</div>
      <div>
        <div id="teconsent"></div>
        <div id="consent_blackbar"></div>
      </div>
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
