import { useEffect, useState } from 'react';
import { getPost } from '../api';

export const usePost = (postId) => {
  const [state, setState] = useState({ step: 'idle' });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadPost = () => {
      setState({ step: 'loading' });

      getPost(postId)
        .then((data) => setState({ step: 'success', data }))
        .catch((error) => setState({ step: 'error', error }));
    };

    loadPost();
  }, [postId, retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  return { state, retry };
};
