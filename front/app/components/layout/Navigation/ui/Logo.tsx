import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const logoIcon = '/logo.svg';

export const Logo: React.FC = memo(() => {
  return (
    <Link className='mb-10 block px-layout' href='/'>
      <Image alt='Online cinema' draggable={false} height={34} src={logoIcon} width={247} />
    </Link>
  );
});
