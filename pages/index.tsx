import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Columns, Container } from "react-bulma-components";
import Link from "next/link";

import Gallery from "../components/Gallery";

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
              <Gallery
                images={[
                  {
                    alt: "main view of the extension",
                    src: "./screen1.webp",
                    width: "360",
                    height: "270",
                  },
                  {
                    alt: "main view of the extension",
                    src: "./screen2.webp",
                    width: "360",
                    height: "270",
                  },
                  {
                    alt: "main view of the extension",
                    src: "./screen3.webp",
                    width: "360",
                    height: "270",
                  },
                  {
                    alt: "main view of the extension",
                    src: "./screen4.webp",
                    width: "360",
                    height: "270",
                  },
                  {
                    alt: "main view of the extension",
                    src: "./screen5.webp",
                    width: "360",
                    height: "270",
                  },
                  {
                    alt: "main view of the extension",
                    src: "./screen6.webp",
                    width: "360",
                    height: "270",
                  },
                ]}
              />
            </Columns.Column>
            <Columns.Column>
              <h2>Extension status</h2>
              <p>
                The browser extension is close to be published on the chrome
                extension store and is expected to be available in a couple of
                days.
              </p>
              <p>
                Thus, this page will be developed in the meantime to provide all
                necessary and interesting information; starting with the
                deserved <Link href="/credits">Credits</Link>.
              </p>
            </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
