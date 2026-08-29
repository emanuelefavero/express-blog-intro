import { Outlet } from 'react-router';
import './RootLayout.css';

export const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};
