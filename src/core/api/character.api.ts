import Axios from 'axios';
import { Character } from 'common/models/character.model';

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const url = `${apiUrl}/${id}`;
  const res = await Axios.get(url);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
