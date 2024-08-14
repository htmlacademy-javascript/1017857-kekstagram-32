/**
 * Генератор случайных положительных чисел
 * @param {number} firstNumber - первое число
 * @param {number} secondNumber - второе число
 * @return {number | false} - Возвращает целое положительное число или false, если введены не верные значения
 */
const generateRandomNumber = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);
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
  const arrayNumbers = Array.from({ length: max }, (_, index) => index + min);

  return function () {
    const rndIndex = generateRandomNumber(0, arrayNumbers.length - 1);
    const currentValue = arrayNumbers[rndIndex];
    arrayNumbers.splice(rndIndex, 1);
    return currentValue;
  };
};

/**
 * Проверка на нажатие кнопки Esc
 * @param {object} evt - объект события
 * @return {boolean} true, если нажата кнопка Es
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * Функция устранения дребезга
 * @param callback - колбэк функция
 * @param {number} timeoutDelay - задержка в миллисекундах
 * @return {(function(...[*]): void)|*}
 */
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {generateRandomNumber, generateRandomUniqNumber, isEscapeKey, debounce};
