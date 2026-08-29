import { useCallback, useEffect, useState } from 'react';
import { getPosts } from '../api';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      try {
        const nextPosts = await getPosts({ signal: controller.signal });

        setPosts(nextPosts);
        setStatus(nextPosts.length === 0 ? 'empty' : 'success');
      } catch {
        if (!controller.signal.aborted) setStatus('error');
      }
    };

    loadPosts();

    return () => controller.abort();
  }, [requestCount]);

  const retry = useCallback(() => {
    setStatus('loading');
    setRequestCount((count) => count + 1);
  }, []);

  return { posts, status, retry };
};
