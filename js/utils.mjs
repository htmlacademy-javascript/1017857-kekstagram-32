/**
 * Генератор случайных положительных чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @return {number | false} - Возвращает целое положительное число или false, если введены не верные значения
 */
const generateRandomNumber = (a, b) => {
  const minNumber = Math.min(a, b);
  const maxNumber = Math.max(a, b);
  if (minNumber < 0 || maxNumber < 0 || minNumber > maxNumber || isNaN(minNumber) || isNaN(maxNumber)) {
    return false;
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};


/**
 * Генератор случайных уникальных чисел
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 * @return {(function(): (number))} - Возвращает функцию, которая генерирует случайное уникальное число
 */
const generateRandomUniqNumber = (min, max) => {
  const array = Array.from({ length: max }, (_, index) => index + min);

  return function () {
    const rndIndex = generateRandomNumber(0, array.length - 1);
    const currentValue = array[rndIndex];
    array.splice(rndIndex, 1);
    return currentValue;
  };
};

/**
 * Проверка на нажатие кнопки Esc
 * @param {object} evt - объект события
 * @return {boolean} true, если нажата кнопка Esc
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

export {generateRandomNumber, generateRandomUniqNumber, isEscapeKey};
