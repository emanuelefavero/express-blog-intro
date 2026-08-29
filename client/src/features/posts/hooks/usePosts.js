import { useCallback, useEffect, useState } from 'react';
import { getPosts } from '../api';

export const usePosts = () => {
  const [state, setState] = useState({ step: 'idle' });
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      setState({ step: 'loading' });

      try {
        const data = await getPosts({ signal: controller.signal });

        setState({ step: 'success', data });
      } catch (error) {
        if (!controller.signal.aborted) {
          setState({ step: 'error', error });
        }
      }
    };

    loadPosts();

    return () => controller.abort();
  }, [requestCount]);

  const retry = useCallback(() => {
    setRequestCount((count) => count + 1);
  }, []);

  return { state, retry };
};
