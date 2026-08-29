import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { usePosts } from '../hooks/usePosts';
import { PostList } from './PostList';
import './PostCatalog.css';

export const PostCatalog = () => {
  const { posts, status, retry } = usePosts();

  return (
    <section className='post-catalog' aria-labelledby='posts-title'>
      <h2 id='posts-title' className='font-normal text-2xl'>
        Post disponibili
      </h2>

      {status === 'loading' && <Spinner />}
      {status === 'success' && <PostList posts={posts} />}
      {status === 'empty' && <p>Non ci sono ancora post disponibili.</p>}
      {status === 'error' && (
        <div className='post-error' role='alert'>
          <p>Non è stato possibile caricare i post.</p>
          <Button onClick={retry}>Riprova</Button>
        </div>
      )}
    </section>
  );
};
