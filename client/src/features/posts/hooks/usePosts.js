import { STEP } from '@/constants/asyncState';
import { useEffect, useState } from 'react';
import { getPosts } from '../api';

export const usePosts = () => {
  const [state, setState] = useState({ step: STEP.IDLE });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadPosts = () => {
      setState({ step: STEP.LOADING });

      getPosts()
        .then((data) => setState({ step: STEP.SUCCESS, data }))
        .catch((error) => setState({ step: STEP.ERROR, error }));
    };

    loadPosts();
  }, [retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  return { state, retry };
};

// TIP: Decided against using AbortController for this example for simplicity
