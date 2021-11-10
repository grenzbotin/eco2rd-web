import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Columns, Container } from "react-bulma-components";

import Gallery from "../components/Gallery";
import { START_PAGE_IMAGES } from "../config/images";

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
          <Columns>
            <Columns.Column>
              <h1>Hello!</h1>
              <p>
                This is <b>eco₂rd</b>, a browser extension that aims to help you
                measuring and understanding your digital, browser traffic based
                footprint.
              </p>
            </Columns.Column>
            <Columns.Column>
              <Gallery images={START_PAGE_IMAGES} />
            </Columns.Column>
            <Columns.Column>
              <h2>Extension status</h2>
              <p>
                The browser extension is close to be published on the chrome
                extension store and is expected to be available in a couple of
                days.
              </p>
            </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
