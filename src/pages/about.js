// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <h1>
        About page!
      </h1>
      <ul>
        <li>
          <Link to="/">Back Home</Link>
        </li>
        <li>
          <Link to="/user">Go to User Page</Link>
        </li>
      </ul>
    </Layout>
  );
};
// Step 3: Export your component
export default AboutPage;
