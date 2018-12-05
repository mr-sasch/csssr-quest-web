$( document ).ready(function() {
  sliderInit();
});

/* Слайдер */

let slider = document.querySelector('#slider__d'),
sliderLeft = slider.getBoundingClientRect().left,
sliderWidth = slider.offsetWidth,
thumb = document.querySelector('#slider__d-pointer'),
thumbWidth = thumb.offsetWidth,
thumbWidthHalf = thumbWidth/2 - 2,

point1 = document.querySelector('#slider__d-item-label-1'),
point2 = document.querySelector('#slider__d-item-label-2'),
point3 = document.querySelector('#slider__d-item-label-3'),
point4 = document.querySelector('#slider__d-item-label-4'),
point1left = point1.getBoundingClientRect().left - sliderLeft,
point2left = point2.getBoundingClientRect().left - sliderLeft,
point3left = point3.getBoundingClientRect().left - sliderLeft,
point4left = point4.getBoundingClientRect().left - sliderLeft,
center1 = point1left + (point2left - point1left)/2,
center2 = point2left + (point3left - point2left)/2,
center3 = point3left + (point4left - point3left)/2;

const sliderInit = (e) => {
  thumb.ondragstart = () => {return false;}

  thumb.onmousedown = (e) => {
    slider.style.position = 'relative';
    thumb.style.position = 'absolute';

    let thumbLeft = thumb.getBoundingClientRect().left,
    shift = e.pageX - thumbLeft;

    document.onmousemove = (e) => {
      let left = e.pageX - sliderLeft - shift;

      if (left < (0 - thumbWidthHalf)) {
        thumb.style.left = (0 - thumbWidthHalf) + 'px';
      } else if (left > sliderWidth - thumbWidth + thumbWidthHalf) {
        thumb.style.left = sliderWidth - thumbWidth - thumbWidthHalf + 'px';
      } else {
        thumb.style.left = left + 'px';
      }
    }

    document.onmouseup = (e) => {
      autoMove(e);
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  const autoMove = (e) => {

    let thumbLeft = thumb.getBoundingClientRect().left,
    shift = e.pageX - thumbLeft,
    left = e.pageX - sliderLeft - shift;

    if (left < center1) {
      thumb.style.left = (0 - thumbWidthHalf) + 'px';
    } else if (center1 < left && left < center2) {
      thumb.style.left = point2left + 'px';
    } else if (center2 < left && left < center3) {
      thumb.style.left = point3left + 'px';
    } else {
      thumb.style.left = sliderWidth - thumbWidth + thumbWidthHalf + 'px';
    }
  }

}

const move1 = () => {
  thumb.style.left = (0 - thumbWidthHalf) + 'px';
}
const move2 = () => {
  let slider = document.querySelector('#slider__d'),
  sliderLeft = slider.getBoundingClientRect().left,
  point2 = document.querySelector('#slider__d-item-label-2'),
  point2left = point2.getBoundingClientRect().left - sliderLeft;
  thumb.style.left = point2left - thumbWidthHalf + 'px';
}
const move3 = (e) => {
  let slider = document.querySelector('#slider__d'),
  sliderLeft = slider.getBoundingClientRect().left,
  point3 = document.querySelector('#slider__d-item-label-3'),
  point3left = point3.getBoundingClientRect().left - sliderLeft;
  thumb.style.left = point3left - thumbWidthHalf + 'px';
}
const move4 = (e) => {
  let slider = document.querySelector('#slider__d'),
  sliderLeft = slider.getBoundingClientRect().left,
  point4 = document.querySelector('#slider__d-item-label-4'),
  point4left = point4.getBoundingClientRect().left - sliderLeft;
  thumb.style.left = point4left - thumbWidthHalf + 'px';
}
/* /Слайдер */
