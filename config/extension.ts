const EXTENSION_STATUS = [
  {
    id: 7,
    date: new Date(2022, 5, 27),
    title: "🌎 v0.1.5 - Power Mix Update",
    link: "https://github.com/grenzbotin/eco2rd/releases/tag/v0.1.5",
    version: "v0.1.5",
    content: "The power mix information (gCO2/kWh) for a lot of countries got updated to numbers from 2020.",
  },
  {
    id: 6,
    date: new Date(2022, 5, 25),
    title: "🏛 v0.1.4 - Historical data",
    link: "https://github.com/grenzbotin/eco2rd/releases/tag/v0.1.4",
    version: "v0.1.4",
    content: "Historical data can now be found in the 'historical' tab that allows to compare data transfer, co2eq and electricity usage over months and years. Note: Historical data will start to be recorded with the installation of the update.",
  },
  {
    id: 5,
    date: new Date(2022, 0, 8),
    title: "🌎 v0.1.3 - Power mix country update",
    link: "https://github.com/grenzbotin/eco2rd/releases/tag/v0.1.3",
    version: "v0.1.3",
    content:
      "Power mix information for existing countries got updated; new power mix data got added for following countries: Argentina, Australia, Brazil, Canada, China, UK, India, Indonesia, Japan, Mexico, Russia, Saudi Arabia, South Africa, South Korea and Turkey.",
  },
  {
    id: 4,
    date: new Date(2021, 10, 22),
    title: "🐛 v0.1.2",
    version: "v0.1.2",
    content:
      "Passively consumed media data like streams are now collected more precisely. Version number added in settings menu.",
  },
  {
    id: 3,
    date: new Date(2021, 10, 15),
    title: "🌱 v0.1.1",
    version: "v0.1.1",
    content: "Only process requests with a given content-length.",
  },
  {
    id: 2,
    date: new Date(2021, 10, 11),
    title: "🚀 Landed",
    version: "v0.1.0",
    content:
      "The browser extension got published in version v0.1.0 in the chrome web store.",
  },
  {
    id: 1,
    date: new Date(2021, 10, 9),
    title: "⏰ Submitted",
    version: "v0.1.0",
    content:
      "The browser extension got submitted and is close to be published in the chrome extension store.",
  },
];

export { EXTENSION_STATUS };
