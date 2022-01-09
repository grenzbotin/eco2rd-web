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
                website content on its screen, other energy consumers that are
                linked to the same goal might be less natural to think about:
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
                of data on average. (Side note: the world first websites were
                around 4 kB in size.)
              </p>
              <p>
                Websites that are consumed via mobile even grew more than 500%,
                from around 300 kB to around 2 MB.
              </p>
              <p>
                Coming back to our web based energy consumption: Sadly, the
                internet is no energy-eldorado. Every byte, every bit costs
                energy - and this energy comes from our states&apos; grid
                systems with all their side effects and carbon emissions heating
                up our beloved world.
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
                measurement you have a few options to modify your digital
                footprint calculation within the extension:
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
                Canada for generating 1 kWh, it&apos;s 449 gCO₂ in Mexico
                (numbers from 2018, via{" "}
                <a rel="noreferrer" href="https://www.climate-transparency.org">
                  climate-transparency.org
                </a>
                ).
              </p>
              <p>
                As you might notice - those differences make a quite huge deal
                in the actual footprint calculation. To have a more precise
                measurement you can select the country you are located in.
              </p>
            </Columns.Column>
            <Columns.Column className={["is-full", styles.column].join(" ")}>
              <h2>The role of data centers</h2>
              <p>
                Data centers play another key role in eco₂rd&apos;s
                measurements. The extension is assuming that around 10% of
                calculated energy is used on data center side for providing the
                website data - the other 90% are used for data transmission to
                the user and data processing on the end user side.
              </p>
              <p>
                Depending on whether the website you are requesting is listed as
                a green energy center or not, this will have an influence on the
                calculation of your digital footprint, too. eco₂rd is using the
                official database of{" "}
                <a
                  rel="noreferrer"
                  href="https://www.thegreenwebfoundation.org"
                >
                  TheGreenWebFoundation
                </a>{" "}
                to evaluate whether the data center that is hosting the website
                you are visiting is certified as a <i>green</i> one. (This check
                is done on the first visit of every website. Re-evaluations are
                happening in intervals of 7 days after the previous check.)
              </p>
              <p>
                If you pin eco₂rd to show up next to your address field in your
                browser, you will notice a color change of the extension icon
                from time to time. The icon indicates whether eco₂rd is aware of
                the data center status. In total there are 3 different states:{" "}
              </p>
              <ul>
                <li className={layout.li}>
                  <img
                    src={"/assets/datacenter_green.png"}
                    alt={"eco₂rd icon with green color"}
                    width="25"
                    height="25"
                  />{" "}
                  <span className={layout.label}>
                    the data center is certified as green energy center by GWF
                  </span>
                </li>
                <li className={layout.li}>
                  <img
                    src={"/assets/datacenter_red.png"}
                    alt={"eco₂rd icon with red color"}
                    width="25"
                    height="25"
                  />{" "}
                  <span className={layout.label}>
                    the data center is not listed as green data center by GWF
                  </span>
                </li>
                <li className={layout.li}>
                  <img
                    src={"/assets/datacenter_undefined.png"}
                    alt={"eco₂rd icon with grey color"}
                    width="25"
                    height="25"
                  />{" "}
                  <span className={layout.label}>
                    eco₂rd does not have information about the data center yet
                  </span>
                </li>
              </ul>
            </Columns.Column>
            <Columns.Column
              className={[
                "is-full",
                styles.column,
                styles.alternate,
                styles.centerAlign,
              ].join(" ")}
            >
              <h2>
                Install eco₂rd and start measuring your digital footprint!
              </h2>
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
          </Columns>
        </Container>
      </main>
    </>
  );
};

export default Home;
