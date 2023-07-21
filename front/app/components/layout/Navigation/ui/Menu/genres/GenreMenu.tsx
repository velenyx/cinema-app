import { memo } from 'react';

import { Menu } from '~/components/layout/Navigation/ui/Menu/Menu';

import { usePopularGenres } from './usePopularGenres';

export const GenreMenu: React.FC = memo(() => {
  const { isLoading, data } = usePopularGenres();
  console.log('@genres', data, isLoading);

  return (
    <>
      {isLoading && <div className='mx-11 mb-6'>Loading...</div>}
      {!isLoading && <Menu menu={{ items: data || [], title: 'Popular genres' }} />}
    </>
  );
});
