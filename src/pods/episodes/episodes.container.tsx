import React, { useState, useEffect } from 'react';
import { Character } from 'common/models';
import { Episode } from 'common/models/episode.model';
import { getEpisodesByCharacter } from './api';
import { useParams } from 'react-router-dom';
import EpisodeList from './episode-list';
import { getCharacter } from 'pods/character/api';

const EpisodesContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [name, setName] = useState('');

  const getIdFromEpisodeUrl = (episodeUrl) =>
    episodeUrl.split('/').reverse()[0];

  useEffect(() => {
    getCharacter(id).then((res: Character) => {
      setName(res.name);
      if (res.episode) {
        const nums = res.episode.map((ep) => getIdFromEpisodeUrl(ep));
        const episodeArr = [];
        getEpisodesByCharacter(nums).then((res) => {
          if (Array.isArray(res)) {
            res.forEach((ep) => episodeArr.push(ep));
          } else {
            episodeArr.push(res);
          }
          setEpisodes(episodeArr);
        });
      }
    });
  }, []);

  return episodes ? (
    <EpisodeList episodes={episodes} name={name} />
  ) : (
    <div>No data</div>
  );
};

export default EpisodesContainer;
