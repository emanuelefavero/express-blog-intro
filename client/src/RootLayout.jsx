import { Outlet } from 'react-router';
import './RootLayout.css';
import { Footer, Header, Main } from '@/components/layout';

export const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};
