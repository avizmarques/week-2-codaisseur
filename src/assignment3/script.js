const infoDiv = document.querySelector('#info');

async function getLuke() {
  const response = await fetch('https://swapi.co/api/people/1');
  const parsedResponse = await response.json();
  
  for (let key in parsedResponse) {
    let newElement = document.createElement('p');
    newElement.textContent = `${key}: ${parsedResponse[key]}`;
    infoDiv.appendChild(newElement);
  }
}

async function getDarth() {
  const response = await fetch('https://swapi.co/api/people/4/');
  const parsedResponse = await response.json();
  infoDiv.innerHTML = '';
  for (let key in parsedResponse) {
    let newElement = document.createElement('p');
    newElement.textContent = `${key}: ${parsedResponse[key]}`;
    infoDiv.appendChild(newElement);
  }
}

getLuke();

document.querySelector('#darth').addEventListener('click', getDarth);