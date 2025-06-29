import HomeClient from '../../components/HomeClient';

export default function Home() {
  return <HomeClient />;
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}
