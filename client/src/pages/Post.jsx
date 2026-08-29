import { PostDetail } from '@/features/posts';
import { useParams } from 'react-router';

export const Post = () => {
  const { postId } = useParams();

  return <PostDetail postId={postId} />;
};
