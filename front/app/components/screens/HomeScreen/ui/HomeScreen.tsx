import { Heading } from '~/components/ui';
import { Meta } from '~/utils/Meta/Meta';

export interface HomeScreenProps {
  test?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Meta
      description='Watch MovieApp movies and TV shows online or stream right to your browser.'
      title='Watch movies online'
    >
      <Heading className='mb-8 text-xl text-gray-500' title='Watch movies online' />
    </Meta>
  );
};
