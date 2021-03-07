import Axios from 'axios';
import { Episode } from 'common/models/episode.model';

const url = 'https://rickandmortyapi.com/api/episode';
export const getEpisodesByCharacter = async (
  episodeIds: number[]
): Promise<Episode[]> => {
  const episodeList = `${url}/${episodeIds}`;
  const res = await Axios.get(episodeList);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
