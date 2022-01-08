import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container } from "react-bulma-components";

import styles from "../styles/Credits.module.scss";
import layout from "../styles/Layout.module.scss";

const images = [
  {
    src: "/assets/average.webp",
    alt: "Average icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/car.webp",
    alt: "Car icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/co2.webp",
    alt: "CO₂ icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/desktoppc.webp",
    alt: "Desktop PC icon",
    name: "Iconjam",
    url: "https://www.flaticon.com/authors/iconjam",
  },
  {
    src: "/assets/download.webp",
    alt: "Download icon",
    name: "Stockes Design",
    url: "https://www.flaticon.com/authors/stockes-design",
  },
  {
    src: "/assets/electricity.webp",
    alt: "Electricity icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/kettle.webp",
    alt: "Kettle icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/movie.webp",
    alt: "Film roll icon",
    name: "fjstudio",
    url: "https://www.flaticon.com/authors/fjstudio",
  },
  {
    src: "/assets/refresh.webp",
    alt: "Refresh icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
  {
    src: "/assets/smartphone.webp",
    alt: "Smartphone icon",
    name: "lakonicon",
    url: "https://www.flaticon.com/authors/lakonicon",
  },
  {
    src: "/assets/tree.webp",
    alt: "Tree icon",
    name: "Freepik",
    url: "https://www.freepik.com",
  },
];

const Credits: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Credits | eco₂rd - Browser extension"
        description="eco₂rd browser extension helps you understanding your digital footprint with measuring your browser traffic based data and engery consumption."
      />
      <main className={layout.main}>
        <Container className={styles.container}>
          <h1>Credits</h1>
          <p>
            The extension would not look like it does without a lot of people
            that created assets in variants of icons, images or animations.{" "}
            <br />
            This is the place to credit each of them.
          </p>
          <h2>Images</h2>
          <p>
            The eco₂rd browser extension uses some images to highlight different
            aspects of the extension.
          </p>
          <ul>
            {images.map((item) => (
              <li key={item.alt} className={layout.li}>
                <img src={item.src} alt={item.alt} width="25" height="25" />{" "}
                <span className={layout.label}>
                  from <a href={item.url}>{item.name}</a> on{" "}
                  <a href="https://www.flaticon.com">flaticon.com</a>
                </span>
              </li>
            ))}
          </ul>
          <h2>Icons</h2>
          <p>
            The used icons for the extension and this web site are a subset of
            the beautiful{" "}
            <a href="https://fontawesome.com/v4.7/">Font Awesome</a> package.
          </p>
          <h2>Animations</h2>
          <p>
            The animations that you might find in the extension are created by{" "}
            <a href="https://lottiefiles.com/demianvenzke">Demian Venzke</a> and{" "}
            <a href="https://lottiefiles.com/user/327759">Yash Yash</a> that are
            designers providing their work on{" "}
            <a href="https://lottiefiles.com">LottieFiles</a>.
          </p>
          <h2>Data center energy source</h2>
          <p>
            The information about whether a data center that hosts the visited
            website is powered with <i>green</i> or <i>grey</i> energy is coming
            from{" "}
            <a href="https://www.thegreenwebfoundation.org/green-web-feed/">
              THE GREEN WEB FOUNDATION
            </a>
            .
          </p>
        </Container>
      </main>
    </>
  );
};

export default Credits;
