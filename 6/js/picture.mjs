const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();

/**
 * Функция создает изображение и добавляет его в DocumentFragment списка изображений
 * @param {Object} pictureData - объект с данными изображения
 */
const createPicture = (pictureData) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', pictureData.url);
  pictureElement.querySelector('.picture__img').setAttribute('alt', pictureData.description);
  pictureElement.querySelector('.picture__comments').textContent = pictureData.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = pictureData.likes;
  pictureListFragment.appendChild(pictureElement);
};

/**
 * Функция создает список из случайных изображений пользователей и выводит его на странице
 * @param {Array} photoData - массив объектов с данными изображений
 */
const createPictureList = (photoData) => {
  photoData.forEach((item) => createPicture(item));
  pictureListElement.appendChild(pictureListFragment);
};

export {createPictureList};
