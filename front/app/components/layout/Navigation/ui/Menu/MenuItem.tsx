import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

import { MaterialIcon } from '~/components/ui/MaterialIcon/MaterialIcon';
import type { MaterialIconName } from '~/shared/types/IconType';

export interface MenuItemType {
  icon: MaterialIconName;
  title: string;
  link: string;
}

export interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = memo(({ item }) => {
  const path = usePathname();
  const isActivePath = path === item.link;

  return (
    <li
      className={`border-r-4 border-r-transparent px-8 transition-colors ${
        isActivePath ? 'border-r-primary' : ''
      }`}
    >
      <Link className='mt-6 flex cursor-pointer items-center px-3 text-gray-600' href={item.link}>
        <MaterialIcon
          className={`text-2lg transition-colors ${isActivePath ? 'fill-primary' : ''}`}
          name={item.icon}
        />
        <span
          className={`ml-3 text-lg transition-colors hover:text-white ${
            isActivePath ? 'text-white' : ''
          }`}
        >
          {item.title}
        </span>
      </Link>
    </li>
  );
});
