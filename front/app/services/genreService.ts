import { axiosClassic } from '~/config';
import type { Genre } from '~/shared/types/MovieTypes';
import { getGenresUrl } from '~/shared/types/api';

export const genreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<Genre[]>(getGenresUrl(''), {
      params: searchTerm && searchTerm
    });
  }
};
