import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Button, Columns, Container } from "react-bulma-components";
import ExtensionNews from "../components/ExtensionNews";

import Gallery from "../components/Gallery";
import { START_PAGE_MEDIA } from "../config/media";

import styles from "../styles/Home.module.scss";
import layout from "../styles/Layout.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="eco₂rd - Browser extension"
        description="eco₂rd browser extension helps you understanding your digital footprint with measuring your browser traffic based data and engery consumption."
      />
      <main className={layout.main}>
        <Container className={styles.container}>
          <Columns desktop={{ gap: 6 }}>
            <Columns.Column size="half" className={styles.column}>
              <h1>Hello!</h1>
              <p>
                This is <b>eco₂rd</b>, a browser extension that aims to help you
                measuring and understanding your digital, browser traffic based
                footprint.
              </p>
              <br />
              <div>
                <Button
                  color="primary"
                  renderAs="a"
                  target="_blank"
                  rel="noreferrer"
                  href="https://chrome.google.com/webstore/detail/eco%E2%82%82rd/abgangmjmkjbpimkgnlbbhkellcekegj"
                >
                  Download from chrome web store
                </Button>
              </div>
              <br />
              <div>
                <Button
                  color="secondary"
                  renderAs="a"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/grenzbotin/eco2rd"
                >
                  Github
                </Button>
              </div>
            </Columns.Column>
            <Columns.Column size="half" className={styles.column}>
              <Gallery media={START_PAGE_MEDIA} />
            </Columns.Column>
            <Columns.Column>
              <ExtensionNews />
            </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
