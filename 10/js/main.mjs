import {createPhotoData} from './data.mjs';
import {createPictureList} from './picture.mjs';
import {addUserFormHandler} from './user-form.js';


const PHOTOS_COUNT = 25;
const photosData = Array.from({length: PHOTOS_COUNT}, createPhotoData);

createPictureList(photosData);
addUserFormHandler();
