import React, { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    console.log(`Mounting or Updating Layout`)
    const taScript = document.createElement("script");
    // taScript.src = "https://eu-consent-icon-dev-sf.truste-svc.net/notice?domain=weather.com&locale=en&js=nj&noticeType=bb&country=gb&text=true&gtm=1";
    taScript.src = "//eu-icon-qa-sf.truste-svc.net/notice?domain=iantest_gdpr.com&locale=en&js=nj&noticeType=bb&country=de&text=true&gtm=1";
    // taScript.src = "//consent.trustarc.com/notice?domain=f5.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1";
    document.head.appendChild(taScript);

    return () => {
      taScript.remove();
      console.log(`Unmounting Layount`);
    }
  }, []);

  return (
    <div>
      {children}
      <div>
        <div id="teconsent"></div>
        <div id="consent_blackbar"></div>
      </div>
    </div>
  );
};

export default Layout;
