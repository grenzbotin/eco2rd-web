import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container } from "react-bulma-components";

import styles from "../styles/Privacy.module.scss";
import layout from "../styles/Layout.module.scss";

const Privacy: NextPage = () => {
  return (
    <>
      <NextSeo
        noindex={true}
        nofollow={true}
        title="Legal notice | eco₂rd - Browser extension"
        description="eco₂rd browser extension helps you understanding your digital footprint with measuring your browser traffic based data and engery consumption."
      />
      <main className={layout.main}>
        <Container className={styles.container}>
          <h1>Privacy</h1>
          <h2>eco₂rd extension</h2>
          <p>
            When using the extension eco₂rd, none of your data are collected and
            sent a any other instance in any way by the extension: all browsing
            data and information are analyzed and processed directly on your
            device.
          </p>
          <p>
            The source code of the extension is available in open access, to
            ensure transparency and for any other purpose: Link-to-follow.
          </p>
          <p>
            eco₂rd got concepted, developed and designed by{" "}
            <a target="_blank" rel="noreferrer" href="https://www.vulpis.dev">
              Franziska Fieke
            </a>
            .
          </p>
          <h2>eco₂rd website: ecord.info</h2>
          <p>
            The following data protection declaration applies for the usage of
            the website and related services with the domain ecord.info. By
            using this website you agree with the collection, usage and
            transmission of your data corresponding to this data protection
            declaration.
          </p>
          <h3>&gt; Accountable person</h3>
          <p>
            Accountable for the collection, processing and usage of your
            personal data according to the art. 4 no. 7 GDPR is Franziska Fieke.
          </p>
          <h3>&gt; Hosting</h3>
          <p>
            This website is hosted on servers enabled by the CDN service
            provider Cloudflare, Inc. in 101 Townsend St, San Francisco, CA
            94107 USA. The used servers are located all over the world and are
            maintained and secured to the best of my knowledge. For the purpose
            of data processing Cloudflare closes a Data Processing Agreement
            (DPA) with its customers that follows the rules of the GDPR. I agree
            with{" "}
            <a
              href="https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/"
              target="_blank"
              rel="noreferrer"
            >
              Cloudflares&apos; data processing agreement
            </a>
            .
          </p>
          <h3>&gt; Access data</h3>
          <p>
            With your request to ecord.info, your IP address got routed through
            an unknown number of network and servers located in (for me) unknown
            countries with their own data protection regulations and got
            probably stored or read out on its way. That happens before your
            request even reached our server and is part of your usage of the
            WWW. The server that is carrying this website is configured in a way
            that is does not store any logs with personal data (like e.g. Ip
            addresses, browser types, operating systems or similar information).
          </p>
          <h3>&gt; SSL protection</h3>
          <p>
            Any data transferred between your browser and the web server are
            protected via SSL.
          </p>
          <h3>&gt; Cookies and local storage</h3>
          <p>
            There are no cookies created with this website. Local storage is not
            touched when using the website.
          </p>
          <h3>&gt; Tracking and statistics</h3>
          <p>
            This website does not use tracking software or tracking pixel and
            disclaim to use any form of fingerprinting for the purpose of data
            collection.
          </p>
          <h3>&gt; Changes to the privacy declaration</h3>
          <p>
            In order to meet the legal requirements I may update the privacy
            policy from time to time. Any changes to the privacy policy will be
            published on this page and are effective once they are posted.
          </p>
        </Container>
      </main>
    </>
  );
};

export default Privacy;
