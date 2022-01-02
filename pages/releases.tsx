import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container } from "react-bulma-components";
import ExtensionNews from "../components/ExtensionNews";

import styles from "../styles/Credits.module.scss";
import layout from "../styles/Layout.module.scss";

const Releases: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Releases | eco₂rd - Browser extension"
        description="Releases from eco₂rd browser extension."
      />
      <main className={layout.main}>
        <Container className={styles.container}>
          <h1>eco₂rd Releases</h1>
          <p>
            The browser extension is in a stable condition with a lot of
            potential for improvements like localisation, more data and
            features. <br />
            The following list gives a an overview of the changes that got
            introduced in the past.
          </p>
          <ExtensionNews />
        </Container>
      </main>
    </>
  );
};

export default Releases;
