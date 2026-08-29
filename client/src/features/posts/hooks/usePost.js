import { useCallback, useEffect, useState } from 'react';
import { getPost } from '../api';

export const usePost = (postId) => {
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadPost = async () => {
      try {
        const nextPost = await getPost(postId, {
          signal: controller.signal,
        });

        setPost(nextPost);
        setStatus('success');
      } catch (error) {
        if (controller.signal.aborted) return;

        setStatus(error.response?.status === 404 ? 'not-found' : 'error');
      }
    };

    loadPost();

    return () => controller.abort();
  }, [postId, requestCount]);

  const retry = useCallback(() => {
    setStatus('loading');
    setRequestCount((count) => count + 1);
  }, []);

  return { post, status, retry };
};
