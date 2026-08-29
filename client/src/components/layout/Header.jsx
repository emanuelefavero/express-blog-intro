import './Header.css';
import { Button } from '@/components/ui/Button';
import { useLocation, useNavigate } from 'react-router';
import { BackButton } from '../shared/BackButton';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePath = pathname === '/';

  const handleLogoClick = () =>
    isHomePath ? window.location.reload() : navigate('/');

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-and-stuff'>
          <Button
            variant={Button.variant.ghost}
            className='logo font-semibold text-xl'
            onClick={handleLogoClick}
            aria-label={isHomePath ? 'Reload homepage' : 'Go to homepage'}
          >
            Express Blog
          </Button>

          <BackButton variant={Button.variant.ghost} />
        </div>
      </div>
    </header>
  );
};
