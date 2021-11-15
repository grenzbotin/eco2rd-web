export interface MediaProps {
  type?: string;
  alt: string;
  src: string;
  width: string;
  height: string;
  caption: string;
}

const START_PAGE_MEDIA = [
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
    src: "./media/images/screen2.webp",
    width: "360",
    height: "270",
    caption:
      "Detail page of a visited websites with amount of visits, downloaded data and electricity used",
  },
  {
    alt: "detail on download chip click",
    src: "./media/images/screen3.webp",
    width: "360",
    height: "270",
    caption:
      "Detail view of consumed electricity: How many times could a phone have been charged?",
  },
  {
    alt: "list view data centers",
    src: "./media/images/screen4.webp",
    width: "360",
    height: "270",
    caption:
      "List view of data centers that are marked as green",
  },
  {
    alt: "list view visited websites",
    src: "./media/images/screen5.webp",
    width: "360",
    height: "270",
    caption: "List view of visited websites",
  },
  {
    type: 'image',
    alt: "settings pop up",
    src: "./media/images/screen6.webp",
    width: "360",
    height: "270",
    caption:
      "In the settings you can select your country and which kWh modifier you prefer.",
  },
];

export { START_PAGE_MEDIA };