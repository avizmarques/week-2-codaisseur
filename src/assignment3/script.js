const infoDiv = document.querySelector('#info');
const image = document.querySelector('#pic');
const nameElement = document.querySelector('#name');
const heightElement = document.querySelector('#height');
const genderElement = document.querySelector('#gender');
const homeworldElement = document.querySelector('#homeworld');

async function getLuke() {
  const response = await fetch('https://swapi.co/api/people/1');
  const parsedResponse = await response.json();
  const homeworldUrl = parsedResponse.homeworld;
  const homeWorldResponse = await fetch(homeworldUrl);
  const parsedHomeWorldResponse = await homeWorldResponse.json();
  
  image.src = 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg';
  nameElement.innerText = `Name: ${parsedResponse.name}`;
  heightElement.innerText = `Height: ${parsedResponse.height}`;
  genderElement.innerText = `Gender: ${parsedResponse.gender}`;
  homeworldElement.innerText = `Homeworld: ${parsedHomeWorldResponse.name}`;
}

async function getDarth() {
  const response = await fetch('https://swapi.co/api/people/4/');
  const parsedResponse = await response.json();
  const homeworldUrl = parsedResponse.homeworld;
  const homeWorldResponse = await fetch(homeworldUrl);
  const parsedHomeWorldResponse = await homeWorldResponse.json();

  image.src = 'https://www.emaisgoias.com.br/wp-content/uploads/2018/11/darth-vader.jpg';
  nameElement.innerText = `Name: ${parsedResponse.name}`;
  heightElement.innerText = `Height: ${parsedResponse.height}`;
  genderElement.innerText = `Gender: ${parsedResponse.gender}`;
  homeworldElement.innerText = `Homeworld: ${parsedHomeWorldResponse.name}`;
}

getLuke();

document.querySelector('#darth').addEventListener('click', getDarth);