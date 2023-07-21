import type { MenuContainerProps } from './MenuContainer';
import { MenuItem } from './MenuItem';
import { AuthItems } from './auth/AuthItems';

export interface MenuProps {
  menu: MenuContainerProps;
}

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const { items, title } = menu;
  return (
    <div className='mb-14 animate-fade'>
      <div className='pl-layout text-sm font-semibold uppercase text-gray-500'>{title}</div>
      <ul>
        {items.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
        {title === 'General' && <AuthItems />}
      </ul>
    </div>
  );
};
