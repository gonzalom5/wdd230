const baseURL = "https://gonzalom5.github.io/wdd230/chamber";
const linksURL = "https://gonzalom5.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data.members);
  displayMembers(data.members)
}

getMembers();

const cards = document.querySelector('#members');

const displayMembers = (allMembers) => {
  allMembers.forEach((member) => {

    const memberName = document.createElement('h3')
    memberName.textContent= member.name;
    const memberAddress = document.createElement('p')
    memberAddress.textContent = member.address;
    const memberPhone = document.createElement('p')
    memberPhone.textContent = member.phone;
    const memberURL = document.createElement('p')
    memberURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
    const memberLogo = document.createElement('img')
    memberLogo.src=`./images/${member.logopath}`
    const memberLevel = document.createElement('img')
    switch(member.level) {
      case 1:
        memberLevel.src = "./images/bronze-level.png"
        memberLevel.alt="Bronze"
        break;
      case 2:
        memberLevel.src = "./images/silver-level.png"
        memberLevel.alt="Silver"
        break;
        case 3:
          memberLevel.src = "./images/golden-level.png"
          memberLevel.alt="Gold"
        break;
      default:
        memberLevel.src = "./images/level-nfp.png"
        memberLevel.alt="Npt for Profit"
    }
    const memberSection = document.createElement('section')
    memberSection.appendChild(memberLogo)
    memberSection.appendChild(memberName)
    memberSection.appendChild(memberAddress)
    memberSection.appendChild(memberPhone)
    memberSection.appendChild(memberURL)
    memberSection.appendChild(memberLevel)
    cards.appendChild(memberSection)
  });
}

const setGrid = document.querySelector('#btnGrid')
const setList = document.querySelector('#btnList')
setGrid.addEventListener('click',() => {
  setGrid.className="active"
  setList.className=""
  cards.className='grid'
});
setList.addEventListener('click',() => {
  setList.className="active"
  setGrid.className=""
  cards.className='list'
});