export interface MediaProps {
  type?: string;
  alt: string;
  src: string;
  width: string;
  height: string;
  caption: string;
}

const DEMO_MEDIA = [
  {
    type: "video",
    alt: "Demo: walk through",
    src: "./media/video/demo.mp4",
    width: "360",
    height: "270",
    caption: "Demo video: walk through eco₂rd",
  },
  {
    alt: "main view of the extension",
    src: "./media/images/screen1.webp",
    width: "360",
    height: "270",
    caption: "Overview of today's consumption data",
  },
  {
    alt: "detail view of a website in the extension",
    src: "./media/images/screen3.webp",
    width: "360",
    height: "270",
    caption:
      "Detail page of a visited websites with amount of visits, downloaded data and electricity used",
  },
  {
    alt: "detail on download chip click",
    src: "./media/images/screen2.webp",
    width: "360",
    height: "270",
    caption:
      "Detail view of consumed electricity: How many times could a phone have been charged?",
  },
  {
    type: "image",
    alt: "settings pop up",
    src: "./media/images/screen4.webp",
    width: "360",
    height: "270",
    caption:
      "In the settings you can select your country and which kWh modifier you prefer.",
  },
  {
    type: "image",
    alt: "historical data",
    src: "./media/images/screen5.webp",
    width: "360",
    height: "270",
    caption:
      "Compare your co2eq, data transfer and electricity usage over months and years.",
  },
];

const DATA_CONSUMPTION_MEDIA = [
  {
    type: "image",
    alt: "Development of website sizes",
    src: "./media/images/timeseries-of-total-kilo.webp",
    width: "360",
    height: "240",
    caption:
      "http archive: The median size of a website grew constantly in the past 10 years",
  },
];

export { DEMO_MEDIA, DATA_CONSUMPTION_MEDIA };
