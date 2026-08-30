import { useEffect, useState } from 'react';
import { getPosts } from '../api';

export const usePosts = () => {
  const [state, setState] = useState({ step: 'idle' });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      setState({ step: 'loading' });

      try {
        const data = await getPosts();

        setState({ step: 'success', data });
      } catch (error) {
        setState({ step: 'error', error });
      }
    };

    loadPosts();
  }, [retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  return { state, retry };
};

// TIP: Decided against using AbortController for this example for simplicity
