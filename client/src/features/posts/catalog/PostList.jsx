import { PostCard } from './PostCard';
import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className='post-list'>
    {posts.map((post) => (
      <li key={post.id}>
        <PostCard post={post} />
      </li>
    ))}
  </ul>
);
