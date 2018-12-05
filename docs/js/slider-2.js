let slider = document.querySelector('#slider__d'),
sliderLeft = slider.getBoundingClientRect().left,
sliderWidth = slider.offsetWidth,
thumb = slider.querySelector('.slider__d-pointer'),
thumbWidth = thumb.offsetWidth,
thumbShift = thumbWidth/2,
point = slider.querySelector('.slider__d-item-label'),
pointWidth = point.offsetWidth,
pointShift = pointWidth/2,
left;

/* Функции */
  /* Двигаем ползунок */
const thumbMove = (e) => {
  slider.style.position = 'relative';
  thumb.style.position = 'absolute';
  let thumbLeft = thumb.getBoundingClientRect().left,
  shift = e.pageX - thumbLeft;

  document.onmousemove = (e) => {
    left = e.pageX - sliderLeft - shift;
    if (left < (0 - thumbShift + pointShift)) {
      thumb.style.left = (0 - thumbShift + pointShift) + 'px';
    } else if (left > sliderWidth - thumbWidth + thumbShift - pointShift) {
      thumb.style.left = sliderWidth - thumbWidth + thumbShift - pointShift + 'px';
    } else {
      thumb.style.left = left + 'px';
    }
  }
    /* Подняли курсор */
  document.onmouseup = (e) => {
    intervals();
    choosePoint();
    moveToPoint(myPoint);
    document.onmousemove = null;
    document.onmouseup = null;
  }
    /* /Подняли курсор */
}
  /* /Двигаем ползунок */

  /* Поднятие курсора */
const mouseUp = (myPoint) => {
  intervals();
  choosePoint();
  moveToPoint(myPoint);
  document.onmousemove = null;
  document.onmouseup = null;
}
  /* /Поднятие курсора */

  /* Интервалы */
let interval = [],
pointsCoords = [];
const intervals = () => {
  let points = slider.querySelectorAll('.slider__d-item-label'),
  pointsLength = points.length;
  for (let i = 0; i < pointsLength; i++) {
    pointsCoords[i] = points[i].getBoundingClientRect().left - sliderLeft - pointShift;
  }
  for (let i = 0; i < pointsLength - 1; i++) {
    interval[i] = pointsCoords[i] + (pointsCoords[i + 1] - pointsCoords[i])/2;
  }
}
  /* /Интервалы*/

  /* Определяем в каком интервале находимся */
const choosePoint = () => {
  if (left < interval[0]) {
    myPoint = 0;
  } else if (left > interval[0] && left < interval[1]) {
    myPoint = 1;
  } else if (left > interval[1] && left < interval[2]) {
    return myPoint = 2;
  } else {
    myPoint = 3;
  }
};
  /* /Определяем в каком интервале находимся */

  /* Делаем переход к нужному пойнту */
const moveToPoint = (point) => {
  thumb.style.left = pointsCoords[point] - thumbShift + pointShift*2 + 'px';
}
  /* /Делаем переход к нужному пойнту */
/* /Функции */


/* События */
  /* Просто кликаем */
thumb.onmouseup = (e) => {
  let thumbLeft = thumb.getBoundingClientRect().left,
  shift = e.pageX - thumbLeft;
  left = e.pageX - sliderLeft - shift;
  intervals();
  choosePoint();
  moveToPoint();
}
  /* Просто кликаем */

  /* Двигаем ползунок */
thumb.ondragstart = () => {return false;}
thumb.addEventListener('mousedown', thumbMove);
  /* /Двигаем ползунок */

  /* Клик на пойнт с ответом */
let sliderItem = slider.querySelectorAll('.slider__d-item');
window.onload = () => {
  sliderItem[3].click();
  sliderMob();
}
  /* /Клик на пойнт с ответом */
/* /События */


/* ---- Вертиклаьный ---- */



/* ---- /Вертиклаьный ---- */
