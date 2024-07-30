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
 * Функция для преобразования времени в минуты.
 * @param {string} time - время в формате HH:MM
 * @return {*} - результат преобразования времени в минуты
 */
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};


/**
 * Функция проверяет, входит ли встреча в рабочий день
 * @param {string} startOfDay - время начала рабочего дня в формате HH:MM
 * @param {string} endOfDay - время окончания рабочего дня в формате HH:MM
 * @param {string} meetingStart - время начала мероприятия в формате HH:MM
 * @param {number} meetingDuration - длительность мероприятия в минутах
 * @return {boolean} - true, если встреча укладывается в рабочий день
 */
const isMeetingWithinWorkday = (startOfDay, endOfDay, meetingStart, meetingDuration) => {
  const startOfDayMinutes = timeToMinutes(startOfDay);
  const endOfDayMinutes = timeToMinutes(endOfDay);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= startOfDayMinutes && meetingEndMinutes <= endOfDayMinutes;
};

// eslint-disable-next-line no-console
console.log(checkWordLength('hello', 5)); // true
// eslint-disable-next-line no-console
console.log(isPalindrome('hello')); // false
// eslint-disable-next-line no-console
console.log(getNumber('123')); //123
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90)); //`true`
