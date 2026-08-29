import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Link } from 'react-router';
import './PostCard.css';

export const PostCard = ({ post }) => (
  <Card as={Link} className='post-card' to={`/posts/${post.id}`}>
    <img
      className='post-card-image'
      src={post.image}
      alt={post.title}
      loading='lazy'
    />
    <Card.Header>
      <Card.Title as='h3'>{post.title}</Card.Title>
      <div className='post-tags' aria-label='Tag'>
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Card.Header>
    <Card.Content>
      <p>{post.content}</p>
    </Card.Content>
  </Card>
);
