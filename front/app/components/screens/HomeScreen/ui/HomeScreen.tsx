import { Layout } from '~/components/layout/Layout';

export interface HomeScreenProps {
  test?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Layout>
      <h1>Home Screen</h1>
    </Layout>
  );
};
