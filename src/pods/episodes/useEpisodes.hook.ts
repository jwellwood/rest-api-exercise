import { useState, useEffect } from 'react';
import { Episode } from 'common/models/episode.model';
import { getEpisodesByCharacter } from './api';

export const useEpisodes = (characterEpisodes) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const getIdFromEpisodeUrl = (episodeUrl) => {
    return episodeUrl.split('/').reverse()[0];
  };

  useEffect(() => {
    if (characterEpisodes) {
      const episodeNumbers = characterEpisodes.forEach((element) => {
        getIdFromEpisodeUrl(element);
      });
      getEpisodesByCharacter(episodeNumbers).then((result) => {
        setEpisodes(result);
      });
    }
  }, [characterEpisodes]);

  return { episodes };
};
