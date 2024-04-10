const baseURL = "https://gonzalom5.github.io/wdd230/";
const linksURL = "https://gonzalom5.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();