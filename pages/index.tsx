import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Button, Columns, Container } from "react-bulma-components";

import Gallery from "../components/Gallery";
import { EXTENSION_STATUS } from "../config/extension";
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
            <Columns.Column className={styles.welcome}>
              <h1>Hello!</h1>
              <p>
                This is <b>eco₂rd</b>, a browser extension that aims to help you
                measuring and understanding your digital, browser traffic based
                footprint.
              </p>
              <Button
                color="primary"
                renderAs="a"
                target="_blank"
                rel="noreferrer"
                href="https://chrome.google.com/webstore/detail/eco%E2%82%82rd/abgangmjmkjbpimkgnlbbhkellcekegj"
              >
                Download from chrome web store
              </Button>
              <Button
                color="secondary"
                renderAs="a"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/grenzbotin/eco2rd"
              >
                Github
              </Button>
            </Columns.Column>
            <Columns.Column>
              <Gallery images={START_PAGE_IMAGES} />
            </Columns.Column>
            <Columns.Column>
              <article className={styles.news}>
                <h2>Extension status</h2>
                <div>
                  {EXTENSION_STATUS.map((item) => (
                    <article key={item.id}>
                      <h3>{item.title}</h3>
                      <time dateTime={item.date.toISOString()}>
                        {item.date.toLocaleDateString()}
                      </time>
                      <p>{item.content}</p>
                    </article>
                  ))}
                </div>
              </article>
            </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
