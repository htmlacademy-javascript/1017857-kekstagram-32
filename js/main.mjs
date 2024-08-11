import {getData} from './api.mjs';
import {createPictureList} from './picture.mjs';
import {addUserFormHandler} from './user-form.mjs';
import {showAlert} from './user-form-validation.mjs';
import {debounce} from './utils.mjs';
import {showImageFilters, addFilterDefaultButtonHandler, addFilterDiscussedButtonHandler, addFilterRandomButtonHandler} from './filters.mjs';

getData()
  .then((photosData) => {
    createPictureList(photosData);
    addFilterDefaultButtonHandler(photosData, debounce(createPictureList));
    addFilterRandomButtonHandler(photosData, debounce(createPictureList));
    addFilterDiscussedButtonHandler(photosData, debounce(createPictureList));
    showImageFilters();
  })
  .catch(
    (err) => {
      showAlert();
    }
  );

addUserFormHandler();
