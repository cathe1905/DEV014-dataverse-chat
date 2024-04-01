export const filterData = (data, filterBy, value) => {
  return data.filter((singer) => singer.facts[filterBy] === value);
};
export const sortData = (data, sortBy, sortOrder) => {
  const clonedData = data.map((card) => ({ ...card }));

  if (sortOrder === "asc") {
    return clonedData.sort(
      (cardOne, cardTwo) => cardOne.facts[sortBy] - cardTwo.facts[sortBy]
    );
  } else {
    return clonedData.sort(
      (cardTwo, cardOne) => cardOne.facts[sortBy] - cardTwo.facts[sortBy]
    );
  }
};

export const computeStats = (data) => {
  const cumputeResult = data.reduce((accumulator, currentSinger) => {
    if (
      currentSinger.facts.yearOfBirth >= 1970 &&
      currentSinger.facts.yearOfBirth <= 1990
    ) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  const percentage = (cumputeResult / data.length) * 100;

  return percentage.toFixed(2);
};
