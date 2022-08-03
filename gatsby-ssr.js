const React = require("react")

const HeadComponents = [
  <script
    key="ta-script"
    src="https://eu-consent-icon-dev-sf.truste-svc.net/notice?domain=weather.com&locale=en&js=nj&noticeType=bb&country=gb&text=true&gtm=1"
  />,
];

exports.onRenderBody = ({ setHeadComponents }, pluginOption) => {
  setHeadComponents(HeadComponents)
}