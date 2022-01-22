export const getOrigins = async (
  episodeArray,
  characterArray,
  resultObject
) => {
  episodeArray.result.forEach((episode) => {
    let locations = new Set();

    episode.characters.forEach((character) => {
      const id = character.substr(42);
      const foundCharacter = characterArray.result.filter((result) => {
        return result.id == id;
      })[0];

      locations.add(foundCharacter.origin.name);
    });

    resultObject.results.push({
      name: episode.name,
      episode: episode.episode,
      locations: [...locations],
    });
  });
};
