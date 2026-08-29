import { PostCatalog } from '@/features/posts';
import './Home.css';

export const Home = () => {
  return (
    <>
      <header className='home-intro'>
        <h1 className='font-normal text-3xl'>Server del mio blog</h1>
        <p>
          Scopri le ricette disponibili e consulta i dati forniti dalle API.
        </p>
      </header>

      <PostCatalog />
    </>
  );
};
