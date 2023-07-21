import Head from 'next/head';
import { usePathname } from 'next/navigation';
import logoImage from 'public/logo.svg';

import { APP_URL } from '~/shared/types/api';
import { onlyText } from '~/utils/string/clearText';

import { siteName, titleMerge } from './useSeo';

export interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

export const Meta: React.FC<MetaProps> = ({ image, description, title, children }) => {
  const path = usePathname() || '';
  const currentUrl = `${APP_URL}${path}`;

  return (
    <>
      <Head>
        <title itemProp='headline'>{titleMerge(title)}</title>
        {description && (
          <>
            <meta content={onlyText(description, 152)} itemProp='description' name='description' />
            <link href={currentUrl} rel='canonical' />
            <meta content='en' property='og:locale' />
            <meta content={titleMerge(title)} property='og:title' />
            <meta content={currentUrl} property='og:url' />
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <meta content={image || logoImage} property='og:image' />
            <meta content={siteName} property='og:site_name' />
            <meta content={onlyText(description, 197)} property='og:description' />
          </>
        )}
        {!description && <meta content='noindex, nofollow' name='robots' />}
      </Head>
      {children}
    </>
  );
};
