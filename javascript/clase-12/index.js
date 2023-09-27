const main = document.getElementById('main');
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
main.appendChild(cardContainer);

// const data = [
//   {
//     title: 'Messi',
//     text: 'El mejor del mundo',
//     img: 'https://ca-times.brightspotcdn.com/dims4/default/3483a4c/2147483647/strip/true/crop/4091x2727+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F8b%2Fbced5f07dae2bf0825b000d7e5c4%2F5cc44de617f34b6a9990e6ce17d153ac'
//   },
//   {
//     title: 'Enzo',
//     text: 'El mejor jugador joven del mundo',
//     img: 'https://www.ole.com.ar/2022/11/27/pGLIp7hKT_400x400__1.jpg'
//   },
//   {
//     title: 'dibu',
//     text: 'El mejor arquero del mundo',
//     img: 'https://www.ellitoral.com/images/2022/12/18/VWjlR3Aq__1565x0__1.jpg'
//   },
// ]

// const JSON = '{
//   "title": 'dibu',
//   "text": 'El mejor arquero del mundo',
//   "img": 'https://www.ellitoral.com/images/2022/12/18/VWjlR3Aq__1565x0__1.jpg'
// }'

// const createCard = (data) => {
//   const card = document.createElement('div');
//   card.classList.add('card');

//   const imagen = document.createElement('img');
//   imagen.src = data.img
//   imagen.alt = data.title
//   imagen.classList.add('card-img');

//   const title = document.createElement('h3');
//   title.textContent = data.title
//   title.classList.add('card-title');

//   const p = document.createElement('p');
//   p.textContent = data.text
//   p.classList.add('card-p');

//   const button = document.createElement('button');
//   button.textContent = 'Continuar'
//   button.classList.add('card-button');

//   cardContainer.appendChild(card);
//   card.appendChild(imagen);
//   card.appendChild(title);
//   card.appendChild(p);
//   card.appendChild(button);
// }
// data.forEach((e) => createCard(e))

console.log(localStorage.getItem('data'))

const data = JSON.parse(localStorage.getItem('data'));

const createCard = (data) => {
  return `
    <div id="card" class="card">
      <img src="${data.img}" alt="${data.title}" class="card-img" />
      <h3 class="card-title"> ${data.title} </h3>
      <p class="card-p"> ${data.text} </p>
      <button class="card-button"> Continuar </button>
    </div>
  `
}

cardContainer.innerHTML = data.map(e => createCard(e)).join('');


// const obj = {
//   title: 'dibu',
//   text: 'El mejor arquero del mundo',
//   img: 'https://www.ellitoral.com/images/2022/12/18/VWjlR3Aq__1565x0__1.jpg'
// }
// const objStringificado = JSON.stringify(obj);
// console.log(JSON.stringify(data));
// console.log(JSON.parse(objStringificado));

// setItem(key, value);
// getItem(key);
// removeItem(key);
// clear();

// localStorage.setItem('data', JSON.stringify(data));
