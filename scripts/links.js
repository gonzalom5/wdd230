const baseURL = "https://gonzalom5.github.io/wdd230/";
const linksURL = "https://gonzalom5.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
  
  getLinks();

  const indexLinks = document.querySelector("#displayIndexLinks");

  function displayLinks(allLinks) {
    allLinks.forEach(item => {

        const weekOne = document.createElement("W1");
        weekOne.textContent = `${item.week}`;

        const linksList = document.createElement("ul");
        item.links.forEach(link => {
            const listItem =document.createElement("li");
            listItem.innerHTML = `<a href="${link.url}">${link.title}</a>`;
            linksList.appendChild(listItem);
        });
        
        indexLinks.appendChild(weekOne);
        indexLinks.appendChild(linksList);
    });
  }