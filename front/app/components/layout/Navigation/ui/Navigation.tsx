import { Logo } from './Logo';
import { MenuContainer } from './Menu/MenuContainer';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <div className={`${className} py-layout`}>
      <Logo />
      <MenuContainer />
    </div>
  );
};
