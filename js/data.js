import {generateRandomNumber, generateRandomUniqNumber} from './utils.js';

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

const mockSettings = {
  'MIN_PHOTO_ID':  1,
  'MAX_PHOTO_ID':  25,
  'MIN_LIKES_COUNT': 15,
  'MAX_LIKES_COUNT': 200,
  'MIN_COMMENTS_ID': 1,
  'MAX_COMMENTS_ID': 750,
  'MIN_AVATAR_NUMBER': 1,
  'MAX_AVATAR_NUMBER':  6,
  'MIN_COMMENTS_COUNT': 0,
  'MAX_COMMENTS_COUNT': 30,
};

const USER_NAMES = ['Анна', 'Валентин', 'Валерий', 'Василий', 'Виктор', 'Виталий', 'Владимир', 'Владислав', 'Вячеслав'];


/**
 * Генератор ID для фотографии
 */
const getPhotoId = generateRandomUniqNumber(mockSettings.MIN_PHOTO_ID, mockSettings.MAX_PHOTO_ID);

/**
 * Генератор url для фотографии
 */
const getPhotoUrl = generateRandomUniqNumber(mockSettings.MIN_PHOTO_ID, mockSettings.MAX_PHOTO_ID);

/**
 * Генератор количества лайков для фотографии
 */
const getLikesCount = generateRandomUniqNumber(mockSettings.MIN_LIKES_COUNT, mockSettings.MAX_LIKES_COUNT);


/**
 * Генератор случайных данных для комментариев
 * @return {{name: string, id: number, avatar: string, message: string}}
 */
const createCommentData = () => ({
  id: generateRandomNumber(mockSettings.MIN_COMMENTS_ID, mockSettings.MAX_COMMENTS_ID),
  avatar: `img/avatar-${generateRandomNumber(mockSettings.MIN_AVATAR_NUMBER, mockSettings.MAX_AVATAR_NUMBER)}.svg`,
  message: COMMENTS[generateRandomNumber(0, COMMENTS.length - 1)],
  name: USER_NAMES[generateRandomNumber(0, USER_NAMES.length - 1)],
});


/**
 * Генератор случайных данных для фотографий
 * @return {{comments: {name: string, id: number, avatar: string, message: string}[], id: number, description: string,  url: string, likes: number}}
 */
const createPhotoData = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: DESCRIPTIONS[generateRandomNumber(0, DESCRIPTIONS.length - 1)],
  likes: getLikesCount(),
  comments: Array.from({length: generateRandomNumber(mockSettings.MIN_COMMENTS_COUNT, mockSettings.MAX_COMMENTS_COUNT)}, createCommentData),
});

export {createPhotoData};
