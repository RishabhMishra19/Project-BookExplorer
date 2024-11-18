const roundRatingValueToNearestAllowedRating = (num) => {
  const values = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return values.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  );
};

module.exports = {
  roundRatingValueToNearestAllowedRating,
};
