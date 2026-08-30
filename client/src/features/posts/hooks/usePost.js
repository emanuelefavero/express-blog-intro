import { STEP } from '@/constants/asyncState';
import { useEffect, useState } from 'react';
import { getPost } from '../api';

export const usePost = (postId) => {
  const [state, setState] = useState({ step: STEP.IDLE });
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadPost = () => {
      setState({ step: STEP.LOADING });

      getPost(postId)
        .then((data) => setState({ step: STEP.SUCCESS, data }))
        .catch((error) => setState({ step: STEP.ERROR, error }));
    };

    loadPost();
  }, [postId, retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  return { state, retry };
};
