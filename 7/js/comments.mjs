const social = document.querySelector('.social');
const commentListElement = social.querySelector('.social__comments');
const commentItemTemplate = commentListElement.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();

/**
 * Функция очистки списка комментариев
 */
const clearComments = () => {
  commentListElement.innerHTML = '';
};

/**
 * Функция добавления комментария в список
 * @param {object} commentData - данные по комментарию
 * @return {Node} - комментарий в виде HTML элемента
 */
const createCommentItem = (commentData) => {
  const commentItemElement = commentItemTemplate.cloneNode(true);
  commentItemElement.querySelector('.social__picture').setAttribute('src', commentData.avatar);
  commentItemElement.querySelector('.social__picture').setAttribute('alt', commentData.name);
  commentItemElement.querySelector('.social__text').textContent = commentData.message;
  return commentItemElement;
};

/**
 * Функция создает список комментариев
 * @param {array} commentsData - массив из комментариев к фотографии
 */
const createCommentList = (commentsData) => {
  commentsData.forEach((item) => {
    commentsListFragment.append(createCommentItem(item));
  });
};

/**
 * Функция выводит список комментариев пользователей
 * @param {Array} commentsData - Список комментариев к фотографии
 */
const modifyCommentList = (commentsData) => {
  clearComments();
  createCommentList(commentsData);
  commentListElement.append(commentsListFragment);
};

export {modifyCommentList};
