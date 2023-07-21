import { memo } from 'react';

import { Menu } from '~/components/layout/Navigation/ui/Menu/Menu';
import { Skeleton } from '~/components/ui';

import { usePopularGenres } from './usePopularGenres';

export const GenreMenu: React.FC = memo(() => {
  const { isLoading, data } = usePopularGenres();
  console.log('@genres', data, isLoading);

  return (
    <>
      {isLoading && (
        <div className='mx-11 mb-6'>
          <Skeleton className='mt-6 h-7' count={5} />
        </div>
      )}
      {!isLoading && <Menu menu={{ items: data || [], title: 'Popular genres' }} />}
    </>
  );
});
