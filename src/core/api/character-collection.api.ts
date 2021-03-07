import Axios from 'axios';
import { CharacterApi } from 'common/models';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  const res = await Axios.get(url);
  try {
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredCharacterCollection = async (
  searchTerm: string,
  page?: number
): Promise<{ info: any; results: CharacterApi[] }> => {
  const filteredUrl = `${url}/?name=${searchTerm}`;
  const paginatedUrl = `${url}/?page=${page}&name=${searchTerm}`;
  const res = await Axios.get(page ? paginatedUrl : filteredUrl);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
