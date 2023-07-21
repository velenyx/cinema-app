import { useQuery } from 'react-query';

import { genreService } from '~/services/genreService';
import { getGenreUrl } from '~/utils';

import type { MenuItemType } from '../MenuItem';

export const usePopularGenres = () => {
  const queryData = useQuery('popular genre menu', () => genreService.getAll(), {
    select: ({ data }) =>
      data
        .map(
          (genre) =>
            ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name
            }) as MenuItemType
        )
        .splice(0, 4)
  });

  return queryData;
};
