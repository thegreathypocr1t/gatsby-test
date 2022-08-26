// Step 1: Import React
import React, { useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

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
    <Layout>
      <h1>GATSBY TEST PAGE</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      {/* <div>
        <div id="teconsent"></div>
        <div id="consent_blackbar"></div>
      </div> */}
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
