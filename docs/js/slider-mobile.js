
const sliderMob = (e) => {

var sliderMob = document.querySelector('#slider__m'),
sliderMobHeight = sliderMob.offsetHeight,
sliderMobTop = sliderMob.getBoundingClientRect().top,
thumbMob = sliderMob.querySelector('.slider__m-pointer'),
thumbMobHeight = thumbMob.offsetHeight,
itemMob = sliderMob.querySelector('.slider__m-item-label'),
itemMobHeight = itemMob.offsetHeight;

thumbMob.ondragstart = () => {return false;}

thumbMob.onmousedown = (e) => {
  sliderMob.style.position = 'relative';
  thumbMob.style.position = 'absolute';

  var thumbMobTop = thumbMob.getBoundingClientRect().top,
  thumbMobShift = e.pageY - thumbMobTop;

  document.onmousemove = (e) => {
    var top = e.pageY - sliderMobTop - thumbMobShift;

    if (top < 0 - thumbMobHeight/2) {
      thumbMob.style.top = 0 - thumbMobHeight/2 + 'px';
    } else if (top > sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2) {
      thumbMob.style.top = sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2 + 'px';
    } else {
      thumbMob.style.top = top + 'px';
    }
  }

  document.onmouseup = (e) => {
    mouseUp(e);

    document.onmousemove = null;
    document.onmouseup = null;
  }
}

const mouseUp = (e) => {
  var itemsArr = [],
  items = sliderMob.querySelectorAll('.slider__m-item-label');

  /* Массив с координатами */
  var itemCoords = [];
  for (let i = 0; i < items.length; i++) {
    itemCoords[i] = items[i].getBoundingClientRect().top - sliderMobTop;
  }
  console.log('itemCoords', itemCoords);
  /* /Массив с координатами */

  /* Массив с интервалами */
  var intervalFrom = [],
  intervalTo = [];
  for (let i = 0; i < items.length; i++) {
    if (i === 0) {
      intervalFrom[i] = -10;
      intervalTo[i] = itemCoords[i] + (itemCoords[i + 1] - itemCoords[i]) / 2;
    } else if (i === (items.length - 1)) {
      intervalFrom[i] = itemCoords[i] - (itemCoords[i] - itemCoords[i - 1]) / 2;
      intervalTo[i] = itemCoords[i];
    } else {
      intervalFrom[i] = itemCoords[i] - (itemCoords[i] - itemCoords[i - 1]) / 2,
      intervalTo[i] = itemCoords[i] + (itemCoords[i + 1] - itemCoords[i]) / 2;
    }
  }
  console.log('intervalFrom', intervalFrom);
  console.log('intervalTo', intervalTo);
  /* /Массив с интервалами */

  /* Массив объектов с координатами и интервалами */
  for (let i = 0; i < items.length; i++) {
    itemsArr[i] = {
      id: i + 1,
      coords: itemCoords[i],
      intFrom: intervalFrom[i],
      intTo: intervalTo[i]
    }
  }
  /* /Массив объектов с координатами и интервалами */
  console.log('Полные данные', itemsArr);

  /* Проверка на соответствие интервала */
  var thumbMobTop = thumbMob.getBoundingClientRect().top, // этот дубляж убрать
  thumbMobShift = e.pageY - thumbMobTop,
  top = e.pageY - sliderMobTop - thumbMobShift;


  for (let i = 0; i < items.length; i++) {
    console.log('itemsArr', itemsArr[i]);
    console.log('top', top);
    if ((top >= itemsArr[i].intFrom) && (top < itemsArr[i].intTo)) {
      thumbMob.style.top = itemsArr[i].coords - thumbMobHeight/2 + 1 + 'px';
      console.log('точка', itemsArr[i].id);
      break;
    }
  }

  // ОТРЕДАКТИРОВАТЬ ИНТЕРВАЛЫ - КОНЕЦ ОДНОГО ДОЛЖЕН БЫТЬ НАЧАЛОМ ВТОРОГО

  /* /Проверка на соответствие интервала */
}






}
