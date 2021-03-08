import Axios from 'axios';
import { CharacterApi } from 'common/models';
import { apiUrl } from 'common/constants';

export const getFilteredCharacterCollection = async (
  searchTerm: string,
  page?: number
): Promise<{ info: any; results: CharacterApi[] }> => {
  try {
    const filteredUrl = `${apiUrl}/?name=${searchTerm}`;
    const paginatedUrl = `${apiUrl}/?page=${page}&name=${searchTerm}`;
    const res = await Axios.get(page ? paginatedUrl : filteredUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
