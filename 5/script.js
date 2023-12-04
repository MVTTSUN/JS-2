import { data } from "./data.js";

const dataParsed = JSON.parse(data);
const container = document.querySelector(".container");
const template = document.querySelector("#template");

dataParsed.forEach((item) => {
  const templateClone = template.content.cloneNode(true);
  const image = templateClone.querySelector(".image");
  const title = templateClone.querySelector(".title");
  const paragraph = templateClone.querySelector(".paragraph");

  image.src = item.image;
  image.alt = item.title;
  title.textContent = item.title;
  paragraph.textContent = item.paragraph;

  container.append(templateClone);
});
