import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { usePosts } from '../hooks/usePosts';
import { PostList } from './PostList';
import './PostCatalog.css';

export const PostCatalog = () => {
  const { state, retry } = usePosts();

  const getContent = () => {
    switch (state.step) {
      case 'idle':
        return null;

      case 'loading':
        return <Spinner />;

      case 'success':
        return state.data.length === 0 ? (
          <p>Non ci sono ancora post disponibili.</p>
        ) : (
          <PostList posts={state.data} />
        );

      case 'error':
        return (
          <div className='post-error' role='alert'>
            <p>Non è stato possibile caricare i post.</p>
            <Button onClick={retry}>Riprova</Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className='post-catalog' aria-labelledby='posts-title'>
      <h2 id='posts-title' className='font-normal text-2xl'>
        Post disponibili
      </h2>

      {getContent()}
    </section>
  );
};
