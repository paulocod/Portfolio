import HomeClient from '../../components/HomeClient';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: 'en' | 'pt' }>;
}) {
  return <HomeClient />;
}
