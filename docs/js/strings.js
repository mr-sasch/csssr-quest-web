/* Расскажите о себе словами */
const areaHeight = () => {

  let wordsTextarea = document.querySelector('#words__textarea'),
  wordsTextareaWrap = wordsTextarea.clientHeight,
  wordsTextareaSelf = wordsTextarea.scrollHeight;

  wordsTextarea.style.height = wordsTextareaWrap + 'px';

  /* Увеличивается или уменьшается строка */
  let valueOld = wordsTextarea.value,
  valueOldLength = valueOld.length,
  valueNew = wordsTextarea.getAttribute('value'),
  valueNewLength = valueNew.length;

  if (valueOldLength < valueNewLength) {
    console.log('строка уменьшается');

    wordsTextarea.style.height = 'auto';
    wordsTextareaSelf = wordsTextarea.scrollHeight;
    console.log(wordsTextareaSelf);
    wordsTextarea.style.height = wordsTextareaSelf + 'px';

  } else {
    console.log('строка растет');
    if (wordsTextareaSelf >= wordsTextareaWrap) {
      wordsTextarea.style.height = wordsTextareaSelf + 'px';
    }
  }

  wordsTextarea.setAttribute('value', wordsTextarea.value);
  /* /Увеличивается или уменьшается строка */
}
// words__textarea.onkeyup = areaHeight();
/* /Расскажите о себе словами */
