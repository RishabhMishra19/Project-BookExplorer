export const removeSingleElmInPlaceByIdx = (array, idxToBeRemoved) => {
  if (idxToBeRemoved < 0 || idxToBeRemoved >= array.length) {
    throw new Error("Index out of bounds");
  }
  for (let i = idxToBeRemoved; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
};

export const roundToClosestValue = (num) => {
  const values = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return values.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  );
};

export const areDatesEqual = (date1, date2) => {
  const date1Str = new Date(date1).toISOString().split("T")[0];
  const date2Str = new Date(date2).toISOString().split("T")[0];
  return date1Str === date2Str;
};
