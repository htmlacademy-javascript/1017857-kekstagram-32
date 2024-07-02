import {createPhotoData} from './data.js';

const PHOTOS_COUNT = 25;
const photosData = Array.from({length: PHOTOS_COUNT}, createPhotoData);

// eslint-disable-next-line no-console
console.log(photosData);
