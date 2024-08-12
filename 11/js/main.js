import {getData} from './api.js';
import {createPictureList} from './picture.js';
import {addUserFormHandler} from './user-form.js';
import {showAlert} from './user-form-validation.js';
import {debounce} from './utils.js';
import {showImageFilters, addFilterDefaultButtonHandler, addFilterDiscussedButtonHandler, addFilterRandomButtonHandler} from './filters.js';

getData()
  .then((photosData) => {
    createPictureList(photosData);
    addFilterDefaultButtonHandler(photosData, debounce(createPictureList));
    addFilterRandomButtonHandler(photosData, debounce(createPictureList));
    addFilterDiscussedButtonHandler(photosData, debounce(createPictureList));
    showImageFilters();
  })
  .catch(
    () => {
      showAlert();
    }
  );

addUserFormHandler();
