import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Button, Columns, Container } from "react-bulma-components";

import Gallery from "../components/Gallery";
import { DATA_CONSUMPTION_MEDIA, DEMO_MEDIA } from "../config/media";

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
          <Columns className="is-8">
            <Columns.Column
              size="half"
              className={[styles.column, styles.hero].join(" ")}
            >
              <h1>eco₂rd web browser extension</h1>
              <p>
                This is <b>eco₂rd</b>, a browser extension that aims to help you
                measuring and understanding your digital browser traffic based
                CO₂ footprint while you are browsing the web.
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
            <Columns.Column
              size="half"
              className={[styles.column, styles.hero].join(" ")}
            >
              <Gallery media={DEMO_MEDIA} />
            </Columns.Column>
            <Columns.Column
              className={["is-full", styles.column, styles.alternate].join(" ")}
            >
              <h2>Website emissions? Why does it matter?</h2>
              <p>
                While it is obvious that your machine - be it your phone, your
                laptop or your TV - needs electrical energy to run and display
                content on its screen, other energy consumers that are linked to
                the same goal might be less natural to think about:
              </p>
              <p>
                For example the energy that is needed to let your browser render
                the information from any website with the underlying data
                transfer from the hosting provider to your machine. This data
                transfer comes - similar to powering your machine at home - with
                the cost of energy from different angles: from the data center
                the website is hosted on, from the network over which this data
                is transferred and only as a last instance from your machine as
                the end consumer.
              </p>
            </Columns.Column>
            <Columns.Column size="half" className={styles.column}>
              <h2>
                In the past 10 years the average website size grew more than
                200%
              </h2>
              <p>
                Based on the data of{" "}
                <a href="https://httparchive.org/reports/state-of-the-web">
                  http archive: state of the web
                </a>
                , the trend in websites getting larger and larger does not seem
                to slow down. While in 2012 a median desktop sized web page had
                a size of 660 kB, todays websites come across with around 2.2 MB
                of data on average.
              </p>
              <p>
                Websites that are consumed via mobile even grew more than 500%,
                from around 300 kB to around 2 MB.
              </p>
              <p>
                Coming back to our web based energy consumption: Sadly, the
                internet is no energy-eldorado. Every byte, every bit costs
                energy - and this energy comes from our states` grid systems
                with all their site effects and carbon emissions heating up our
                beloved world.
              </p>
            </Columns.Column>
            <Columns.Column
              size="half"
              className={[styles.column, styles.middleAlign].join(" ")}
            >
              <Gallery media={DATA_CONSUMPTION_MEDIA} />
            </Columns.Column>
            <Columns.Column
              className={["is-full", styles.column, styles.alternate].join(" ")}
            >
              <h2>Calculating your digital footprint with eco₂rd</h2>
              <p>
                In order to better understand how much energy and GHGs
                (Greenhouse gases) are (approximately) used while using the web
                browser, eco₂rd got developed as a currently 1-person-project.
              </p>
              <p>
                The extension is leveraging the idea from the so-called 1byte
                model that was described by{" "}
                <a rel="noreferrer" href="https://theshiftproject.org/en/home/">
                  &quot;The Shift Project&quot;
                </a>{" "}
                several years ago. The idea is simple: 1 byte transferred has an
                equivalent of a specific amount of energy in{" "}
                <i>Watts per hour (W/h)</i>.
              </p>
              <p>
                Based on whether you want to be more accurate in your
                measurement you have you have a few options to modify your
                digital footprint calculation within the extension:
              </p>

              <h3>kWh-modifier</h3>
              <p>
                The kWh-modifier lets you decide on whether you want to take{" "}
                <span
                  className="has-tooltip-arrow has-tooltip-multiline"
                  data-tooltip="If you are only interested in knowing how much energy is required to make data flow through a cable, you are good to go with narrow system boundaries."
                >
                  <i>narrow system boundaries</i>
                </span>{" "}
                or{" "}
                <span
                  className="has-tooltip-arrow has-tooltip-multiline"
                  data-tooltip="If you rather want to have a clue on the bigger picture of emissions that is linked to your website consumption, you should opt-in for complete system boundaries."
                >
                  <i>complete system boundaries</i>
                </span>{" "}
                into account for your calculation. This option was introduced
                due to the fact that estimates for internet energy consumption
                differ quite widely based on which parts of the total system are
                included in the analysis. More insights about this topic can be
                found in this blogpost from wholegrain digital:{" "}
                <a
                  rel="noreferrer"
                  href="https://www.wholegraindigital.com/blog/website-energy-consumption/"
                >
                  Why do estimates for internet energy consumption vary so
                  drastically?
                </a>
              </p>
              <h3>Region</h3>
              <p>
                Every country has its own electricty grid that consists of
                different portions of energy sources (also known as the{" "}
                <i>power mix</i>). This is the reason why the greenhouse gases
                per kWh are varying, too: While only 130 gCO₂ are emitted in
                Canada for 1 kWh, it&apos;s 449 gCO₂ in Mexico (numbers from
                2018, via{" "}
                <a rel="noreferrer" href="https://www.climate-transparency.org">
                  climate-transparency.org
                </a>
                ).
              </p>
            </Columns.Column>
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
