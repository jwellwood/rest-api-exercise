import Axios from 'axios';
import { Episode } from 'common/models/episode.model';

const url = 'https://rickandmortyapi.com/api/episode';
export const getEpisodesByCharacter = async (
  episodeIds: number[]
): Promise<Episode[]> => {
  try {
    const episodeList = `${url}/${episodeIds}`;
    const res = await Axios.get(episodeList);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
