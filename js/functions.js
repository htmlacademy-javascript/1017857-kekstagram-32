/**
 * Функция для проверки длины строки.
 * @param {string} word - проверяемая строка
 * @param {number} maxWordLength - максимальная длина строки
 * @return {boolean} - true, если длина строки не превышает максимальную длину
 */
const checkWordLength = (word, maxWordLength) => word.length <= maxWordLength;

console.log(`Строка короче 20 символов ожидаю true результат - ${checkWordLength('проверяемая строка', 20)}`);
console.log(`Длина строки ровно 18 символов ожидаю true результат - ${checkWordLength('проверяемая строка', 18)}`);
console.log(`Строка длиннее 10 символов ожидаю false результат - ${checkWordLength('проверяемая строка', 10)}`);

console.log('---------------');

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

console.log(`Строка является палиндромом ожидаю true результат - ${isPalindrome('топот')}`);
console.log(`Несмотря на разный регистр, тоже палиндром ожидаю true результат - ${isPalindrome('ДовОд')}`);
console.log(`Это не палиндром ожидаю false результат - ${isPalindrome('Кекс')}`);
console.log(`Это палиндром ожидаю true результат - ${isPalindrome('Лёша на полке клопа нашёл ')}`);

console.log('---------------');

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

console.log(`'2023 год' ожидаю '2023' результат - ${getNumber('2023 год')}`);
console.log(`'ECMAScript 2022' ожидаю '2022' результат - ${getNumber('ECMAScript 2022')}`);
console.log(`'1 кефир, 0.5 батона' ожидаю '105' результат - ${getNumber('1 кефир, 0.5 батона')}`);
console.log(`'агент 007' ожидаю '7' результат - ${getNumber('агент 007')}`);
console.log(`'а я томат' ожидаю 'NaN' результат - ${getNumber('а я томат')}`);
console.log(`'2023' ожидаю '2023' результат - ${getNumber(2023)}`);
console.log(`'-1' ожидаю '1' результат - ${getNumber(-1)}`);
console.log(`'1.5' ожидаю '15' результат - ${getNumber(1.5)}`);
