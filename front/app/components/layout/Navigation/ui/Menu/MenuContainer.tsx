import { memo } from 'react';

import { Menu } from './Menu';
import { firstMenu, userMenu } from './MenuData';
import type { MenuItemType } from './MenuItem';
import { GenreMenu } from './genres/GenreMenu';

export interface MenuContainerProps {
  title: string;
  items: MenuItemType[];
}

export const MenuContainer: React.FC = memo(() => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  );
});
