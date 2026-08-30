import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Spinner } from '@/components/ui/Spinner';
import { usePost } from '../hooks/usePost';
import './PostDetail.css';

export const PostDetail = ({ postId }) => {
  const { state, retry } = usePost(postId);

  const getContent = () => {
    switch (state.step) {
      default:
      case 'idle':
        return null;

      case 'loading':
        return <Spinner />;

      case 'success': {
        const post = state.data;

        return (
          <Card as='article' className='post-detail'>
            <img
              className='post-detail-image'
              src={post.image}
              alt={post.title}
            />
            <Card.Header>
              <Card.Title as='h1' className='text-3xl'>
                {post.title}
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p>{post.content}</p>
              <div className='post-tags' aria-label='Tag'>
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card.Content>
          </Card>
        );
      }

      case 'error':
        if (state.error.response?.status === 404) {
          return (
            <div className='post-detail-message' role='alert'>
              <h1 className='font-normal text-3xl'>Post non trovato</h1>
              <p>Il post richiesto non esiste.</p>
            </div>
          );
        }

        return (
          <div className='post-detail-message post-detail-error' role='alert'>
            <p>Non è stato possibile caricare il post.</p>
            <Button onClick={retry}>Riprova</Button>
          </div>
        );
    }
  };

  return getContent();
};
