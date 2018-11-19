const templates = document.querySelectorAll('template');
const main = document.getElementById('main');

//Выводит контент шаблона на экран
const showContent = (tempNum) => {
  const temp = templates[tempNum];
  const clon = temp.content.cloneNode(true);
  main.innerHTML = '';
  main.appendChild(clon);
}

showContent(1);