import { Navigation } from './Navigation';
import { Sidebar } from './Sidebar/Sidebar';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative'>
      <Navigation className='fixed bottom-0 left-0 top-0 w-1/5 max-w-xs overflow-y-auto border-r border-r-gray-800' />
      <div className='mx-[20%] min-h-screen p-layout'>{children}</div>
      <Sidebar className='fixed bottom-0 right-0 top-0 w-1/5 max-w-xs overflow-y-auto border-l border-l-gray-800' />
    </div>
  );
};
