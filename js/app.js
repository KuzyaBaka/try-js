/* const main = document.getElementById("main");
setInterval(() => {
  main.classList.toggle("haid");
}, 500);

const int = document.getElementById("int");
int.addEventListener('click', () => alert ('sad'));
int.addEventListener('click', () => alert ('good'));

function handlFocus(){
  console.log('focus');
}
int.addEventListener('focus', handlFocus);

function handlBlur(){
  console.log('blur');
}
int.addEventListener('blur', handlBlur);

//запоминает значения, введенные в input
// контролируте что пишет человек console.log(e.target.value);
function handlchange(e){
  console.log(e.target.value);
}
int.addEventListener('change', handlchange);
// меняем change на input
function handlchange(e){
  console.log(e.target.value);
}
int.addEventListener('input', handlchange);

// посмотреть атрубуты a-ссылки
// имплементация
// не переходит по ссылке
const youtube = document.getElementById('youtube');

function handleYouTube(e) {
  e.preventDefault();
}
youtube.addEventListener('click', handleYouTube); */

const main = document.querySelector(`.main`);

function customHower(id) {
  let card = document.getElementById(id);
  card.style.backgroundColor = `red`;
}

function outHover(id) {
  let card = document.getElementById(id);
  card.style.backgroundColor = `white`;
}

function getBooks(name, price, image, id) {
  return `<div onmouseover="customHower(${id})" onmouseout="outHover(${id})" class = "card" id = ${id}>
  <h2>${name}</h2>
  <p>${price}</p>
  <img src=${image}>
  <div>
  <button onclick = "onAdd(${id})">Add</button>
  </div>
</div>`;
}

function getData(data) {
  main.innerHTML = data
    .map((i) => {
      return getBooks(i.name, i.price, i.imageUrl, i.id);
    })
    .join(``)
    .toString();
}

// Слайдер

const left = document.querySelector(`.left`);
const right = document.querySelector(`.right`);
const sliderImage = document.querySelector(`.slider-screen`);

function slider() {
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => {
      const arr = data.map((i) => i.imageUrl);

      let count = 0;

      left.disabled = true;

      sliderImage.innerHTML = `<img src=${arr[count]} width ="200px" height="300px">`;

      right.onclick = function () {
        count++;
        sliderImage.innerHTML = `<img src=${arr[count]} width ="200px" height="300px">`;
        if (count === 9) {
          right.disabled = true;
        }
        if (count > 0) {
          left.disabled = false;
        }
      };
      left.onclick = function () {
        count--;
        sliderImage.innerHTML = `<img src=${arr[count]} width ="200px" height="300px">`;

        if (count === 0) {
          left.disabled = true;
        }
        if (count !== 0) {
          right.disabled = false;
        }
      };
    });
}
slider();

// Поиск

const search = document.getElementById(`search`);

function handleSearch(e) {
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = data
        .filter((i) =>
          i.name.toUpperCase().includes(e.target.value.toUpperCase())
        )
        .map((i) => getBooks(i.name, i.price, i.imageUrl))
        .join(``);
    });
}

search.addEventListener(`input`, handleSearch);

// Избранное

const favorite = [];

const home = document.getElementById(`home`);
const favoritePage = document.getElementById(`favourite`);

function onAdd(id) {
  Toastify({
    text: "Saved",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  const element = document.getElementById(id);
  favorite.push(element.innerHTML);
  console.log(favorite);
  localStorage.setItem(`example`, JSON.stringify(favorite));
}

function handleFavourite() {
  main.innerHTML = [
    ...new Set(JSON.parse(localStorage.getItem(`example`))),
  ].map((i) => {
    return `<div class="card">${i}</div>`;
  });
}

favoritePage.addEventListener(`click`, handleFavourite);
home.addEventListener(`click`, books);

// Часы

const timer = document.getElementById(`timer`);

setInterval(() => {
  timer.innerHTML = new Date().toLocaleTimeString(`en-GB`);
}, 1000);

function books() {
  [...new Set(JSON.parse(localStorage.getItem(`example`)))].map((i) => {
    return favorite.push(i);
  });
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => getData(data))
    .catch((err) => console.log(err.message));
}
books();

// login

const loginButton = document.getElementById(`logInButton`);
loginButton.addEventListener(`click`, showLogin);

const closeButton = document.querySelector(`#close`);
closeButton.addEventListener(`click`, showLogin);

const myName = document.getElementById(`name`);
myName.addEventListener(`change`, validateName);

const nameError = document.getElementById(`nameError`);

const submitDis = document.getElementById(`submitDis`);
submitDis.addEventListener(`click`, showLogin);

function validateName(e) {
  if (e.target.value.length < 3) {
    nameError.innerHTML = `Enter more letter then three`;
    // name.style.border = `5 px solid red`;
    submitDis.disabled = true;
  } else {
    nameError.innerHTML = ``;
    // name.style.border = ``;
    submitDis.disabled = false;
  }
}

function showLogin() {
  const loginMenu = document.querySelector(`.div-login`);
  loginMenu.classList.toggle(`noneClass`);
}

// Сортировка по имени

const sort = document.getElementById(`sort`);
sort.addEventListener(`click`, handleSort);

function handleSort() {
  [...new Set(JSON.parse(localStorage.getItem(`example`)))].map((i) => {
    return favorite.push(i);
  });
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => {
      return (main.innerHTML = data
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((i) => {
          return getBooks(i.name, i.price, i.imageUrl, i.id);
        })
        .join("")
        .toString());
    });
}


/* Вариант исправления добавления 

const favorite = [...JSON.parse(localStorage.getItem(`example`))] || [JSON.parse(localStorage.getItem(`example`))];



*/

// trim - убирает пробелы
// slice - обрезает букву
// join - переводит массив в строку
// fill - заполняет массив
// Math.floor(a) - округляет в меньшую сторону
// Math.ceil(a) - округляет в большую сторону
// Math.round(a) - округляет по правилам математики
// Math.min / max - выводит меньшее/большее число
// Array.isArray(arr) - проверка на массив, Array.from(a) - делает из чего-либо массив
// new Set(arrNum) - убирает дублированные данные из массива и преобразует его в "коллекцию"

// Сделаь Ховер без CSS
