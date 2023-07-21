import type { MenuContainerProps } from './MenuContainer';

export const firstMenu: MenuContainerProps = {
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genred',
      title: 'Discovery'
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now'
    }
  ],
  title: 'Menu'
};

export const userMenu: MenuContainerProps = {
  items: [],
  title: 'General'
};
