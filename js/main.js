const templates = document.querySelectorAll(`template`);
const main = document.getElementById(`main`);
let active;

//Выводит контент шаблона на экран
const showContent = (tempNum) => {
  const temp = templates[tempNum];
  const clon = temp.content.cloneNode(true);
  main.innerHTML = ``;
  main.appendChild(clon);
  active = tempNum;
}

//Установка начального экрана
showContent(1);

//Листание экранов кнопками
document.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === 37) { // ArrowLeft
    showContent(active-1);
  }
  else if (evt.keyCode === 39) { // ArrowRight
    showContent(active+1);
  }
})

//Добавляем стрелки навигации
const arrows = document.createElement(`div`);
arrows.classList.add(`arrows__wrap`);
document.body.appendChild(arrows);
const arrowsStyle = document.createElement(`style`);
arrows.appendChild(arrowsStyle);
arrowsStyle.innerHTML = `.arrows__wrap {
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}`

const arrowLeft = document.createElement('button');
arrowLeft.classList.add(`arrows__btn`);
arrowLeft.innerHTML = `<-`;
arrows.appendChild(arrowLeft);
const arrowRight = document.createElement(`button`);
arrowRight.classList.add(`arrows__btn`);
arrowRight.innerHTML = `->`;
arrows.appendChild(arrowRight);

arrowLeft.addEventListener(`click`, () => {
  showContent(active-1);
})
arrowRight.addEventListener(`click`, () => {
  showContent(active+1);
})