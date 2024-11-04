export const removeSingleElmInPlaceByIdx = (array, idxToBeRemoved) => {
  if (idxToBeRemoved < 0 || idxToBeRemoved >= array.length) {
    throw new Error("Index out of bounds");
  }
  for (let i = idxToBeRemoved; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
};
