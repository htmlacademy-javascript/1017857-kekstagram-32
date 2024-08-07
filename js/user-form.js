import {addEffectLevelSliderClickUpdateHandler} from './effect.js';
import {isValidComment} from './comment-validation.js';
import {openUserForm, addEventListenersToForm, closeUserForm} from './user-modal.js';

const fileChooser = document.querySelector('#upload-file');
const userPicture = document.querySelector('.img-upload__preview img');
const imageUploadForm = document.querySelector('#upload-select-image');

/**
 * Функция добавляет обработчик события на отправку формы
 */
const addUserFormSubmitHandler = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValidComment()) {
      closeUserForm();
    }
  });
};

/**
 * Функция добавляет обработчик события на изменения загружаемого изображения
 */
const addFileChooserChangeHandler = () => {
  fileChooser.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserForm();
  });
};

/**
 * Функция добавляет обработчики событий: изменение диапазона значений эффекта, отправку пользовательской формы, изменения загружаемого изображения
 */
const addUserFormHandler = () => {
  addEffectLevelSliderClickUpdateHandler(userPicture);
  addUserFormSubmitHandler();
  addEventListenersToForm();
  addFileChooserChangeHandler();
};

export {addUserFormHandler};
