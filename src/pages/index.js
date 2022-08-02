// Step 1: Import React
import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div id="teconsent"></div>
      <div id="consent_blackbar"></div>
      {/* <Footer></Footer> */}
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;
