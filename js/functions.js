/**
 * Функция для проверки длины строки.
 * @param {string} word - проверяемая строка
 * @param {number} maxWordLength - максимальная длина строки
 * @return {boolean} - true, если длина строки не превышает максимальную длину
 */
const checkWordLength = (word, maxWordLength) => word.length <= maxWordLength;


/**
 * Функция для проверки, является ли строка палиндромом.
 * @param {string} word - проверяемая строка
 * @return {boolean} - true, если строка является палиндромом
 */
const isPalindrome = (word) => {
  const normalWord = word.toLowerCase().replaceAll(' ', '');
  let reverseWord = '';
  for (let i = normalWord.length - 1; i >= 0; i--) {
    reverseWord += normalWord[i];
  }
  return reverseWord === normalWord;
};


/**
 * Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
 * @param {string, number} value - принимаемая строка.
 * @return {number} - результат вычисления в виде целого положительного числа. Если в строке нет ни одной цифры, функция возвращает NaN
 */
const getNumber = (value) => {
  const string = value.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = parseInt(string.at(i), 10);
    if (!Number.isNaN(char)) {
      result += char;
    }
  }
  return parseInt(result, 10);
};


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

export {checkWordLength, isPalindrome, getNumber, generateRandomNumber, generateRandomUniqNumber};
