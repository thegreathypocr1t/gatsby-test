// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// Step 2: Define your component
const UserPage = () => {
  return (
    <Layout>
      <h1>
        User page!
      </h1>
      <ul>
        <li>
          <Link to="/">Back Home</Link>
        </li>
        <li>
          <Link to="/about">Go to About Page</Link>
        </li>
      </ul>
    </Layout>
  );
};
// Step 3: Export your component
export default UserPage;
