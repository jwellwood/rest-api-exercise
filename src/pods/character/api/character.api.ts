import Axios from 'axios';
import { Character } from 'common/models/character.model';
import { apiUrl } from 'common/constants';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const url = `${apiUrl}/${id}`;
    const res = await Axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
