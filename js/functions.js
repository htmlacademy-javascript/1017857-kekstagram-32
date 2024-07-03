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

const isInWorkingTime = (startWorkTime, endWorkTime, startEventTime, duration) => {
  const startWorkTimeHours = parseInt(startWorkTime.split(':')[0], 10);
  const startWorkTimeMinutes = parseInt(startWorkTime.split(':')[1], 10);
  const endWorkTimeHours = parseInt(endWorkTime.split(':')[0], 10);
  const endWorkTimeMinutes = parseInt(endWorkTime.split(':')[1], 10);
  const startEventTimeHours = parseInt(startEventTime.split(':')[0], 10);
  const startEventTimeMinutes = parseInt(startEventTime.split(':')[1], 10);
};
