import { useCallback, useEffect, useState } from 'react';
import { getPost } from '../api';

export const usePost = (postId) => {
  const [state, setState] = useState({ step: 'idle' });
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadPost = async () => {
      setState({ step: 'loading' });

      try {
        const data = await getPost(postId, {
          signal: controller.signal,
        });

        setState({ step: 'success', data });
      } catch (error) {
        if (controller.signal.aborted) return;

        setState({ step: 'error', error });
      }
    };

    loadPost();

    return () => controller.abort();
  }, [postId, requestCount]);

  const retry = useCallback(() => {
    setRequestCount((count) => count + 1);
  }, []);

  return { state, retry };
};
