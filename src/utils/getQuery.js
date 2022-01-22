export const getQuery = (route) => {
  let count = 0;

  switch (route) {
    case "location":
      count = 126;
      break;
    case "character":
      count = 826;
      break;
    case "episode":
      count = 51;
      break;
  }

  let query = "";

  for (let i = 1; i < count + 1; i++) {
    query += `${i},`;
  }

  return query;
};
