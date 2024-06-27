const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const DESCRIPTIONS = [
  'Восход солнца над живописной горной долиной, залитой золотыми лучами утреннего света.',
  'Маленький котёнок игриво прячется в саду среди ярких цветов и зелёной травы.',
  'Старинная деревянная лодка покачивается на волнах спокойного озера на закате.',
  'Семья с радостью гуляет по парку, наслаждаясь тёплым летним вечером.',
  'Белоснежный пляж с кристально чистой водой и пальмами на фоне голубого неба.',
  'Лавандовые поля Прованса, простирающиеся до горизонта под ярким солнцем.',
  'Современный мегаполис ночью с яркими огнями и оживлённым трафиком.',
  'Друзья, весело проводящие время у костра в лесу, рассказывая истории.',
  'Заснеженные вершины Альп, отражающие солнечные лучи на фоне ясного неба.',
  'Красочная ярмарка с аттракционами и людьми, наслаждающимися праздником.'
];

const USER_NAMES = ['Анна', 'Валентин', 'Валерий', 'Василий', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Вячеслав'];

const PHOTOS_COUNT = 25;

/**
 * Генератор случайных положительных чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @return {number | false} - Возвращает целое положительное число или false, если введены не верные значения
 */
const randomNumberGenerator = (a, b) => {
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
 * @return {(function(): (null|number))} - Возвращает функцию, которая генерирует случайное уникальное число
 */
const randomUniqNumberGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = randomNumberGenerator(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumberGenerator(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

/**
 * Генератор ID для фотографии
 */
const getPhotoId = randomUniqNumberGenerator(1, 25);

/**
 * Генератор url для фотографии
 */
const getPhotoUrl = randomUniqNumberGenerator(1, 25);

/**
 * Генератор количества лайков для фотографии
 */
const getLikesCount = randomUniqNumberGenerator(15, 200);


/**
 * Генератор случайных данных для комментариев
 * @return {{name: string, id: number, avatar: string, message: string}}
 */
const createCommentData = () => ({
  id: randomNumberGenerator(1, 750),
  avatar: `img/avatar-${randomNumberGenerator(1, 6)}.svg`,
  message: COMMENTS[randomNumberGenerator(0, COMMENTS.length - 1)],
  name: USER_NAMES[randomNumberGenerator(0, USER_NAMES.length - 1)],
});


/**
 * Генератор случайных данных для фотографий
 * @return {{comments: {name: string, id: number, avatar: string, message: string}[], id: number, description: string,  url: string, likes: number}}
 */
const createPhotoData = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: DESCRIPTIONS[randomNumberGenerator(0, DESCRIPTIONS.length - 1)],
  likes: getLikesCount(),
  comments: Array.from({length: randomNumberGenerator(0, 30)}, createCommentData),
});

const photosData = Array.from({length: PHOTOS_COUNT}, createPhotoData);

// eslint-disable-next-line no-console
console.log(photosData);
