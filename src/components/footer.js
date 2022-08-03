// Step 1: Import React
import * as React from "react";
// import { Helmet } from "react-helmet";

// Step 2: Define your component
class Footer extends React.Component {
  componentDidMount() {
    console.log(`mount`);
  }

  componentDidUpdate() {
    console.log(`update`);
  }

  componentWillUnmount() {
    console.log(`unmount`);
  }

  render() {
    return (
      <div>
        {/* <Helmet>
          <script
            async="async"
            src="https://eu-consent-icon-dev-sf.truste-svc.net/notice?domain=weather.com&locale=en&js=nj&noticeType=bb&country=gb&text=true&gtm=1"
            crossOrigin=""
            data-react-helmet="true"
          />
        </Helmet> */}
        <div id="teconsent"></div>
        <div id="consent_blackbar"></div>
      </div>
    );
  }
}

// Step 3: Export your component
export default Footer;
