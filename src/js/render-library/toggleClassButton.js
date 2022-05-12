const activeClass = 'active';

const removedClassButton = currentRemove => {
  if (!currentRemove.classList.contains(activeClass)) {
    return;
  }
  currentRemove.classList.remove(activeClass);
};

const addedClassButton = currentAdd => {
  if (currentAdd.classList.contains(activeClass)) {
    return;
  }
  currentAdd.classList.add(activeClass);
};

export { addedClassButton, removedClassButton };
