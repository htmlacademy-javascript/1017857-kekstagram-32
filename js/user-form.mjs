import {addScaleClickHandler} from './scale.mjs';
import {addEffectUpdateHandler} from './effect.mjs';
import {addUserFormSubmitHandler} from './user-form-validation.mjs';
import {openUserForm, addEventListenersToForm} from './user-modal.mjs';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const userPicture = document.querySelector('.img-upload__preview img');


/**
* Функция добавляет обработчики событий: изменение масштаба, изменение диапазона значений эффекта, отправку пользовательской формы, изменения загружаемого изображения
*/
const addUserFormHandler = () => {
  addScaleClickHandler(userPicture);
  addEffectUpdateHandler(userPicture);
  addUserFormSubmitHandler();
  addEventListenersToForm();

  fileChooser.addEventListener('change', () => {
    openUserForm();
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      userPicture.src = URL.createObjectURL(file);
    }
  });
};

export {addUserFormHandler};

