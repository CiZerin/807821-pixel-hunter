const templates = document.querySelectorAll('template');
const main = document.getElementById('main');
let active;

//Выводит контент шаблона на экран
const showContent = (tempNum) => {
  const temp = templates[tempNum];
  const clon = temp.content.cloneNode(true);
  main.innerHTML = '';
  main.appendChild(clon);
  active = tempNum;
}

//Установка начального экрана
showContent(1);

//Листание экранов кнопками
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 37) { // ArrowLeft
    showContent(active-1);
  }
  else if (evt.keyCode === 39) { // ArrowRight
    showContent(active+1);
  }
})