import { useCallback } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

export function SignInView() {
  const handleLogin = useCallback(() => {
    window.location.href = import.meta.env.VITE_WORKOS_REDIRECT_URL;
  }, []);

  return (
    <LoadingButton onClick={handleLogin}>Sign in with OS AuthKit</LoadingButton>
  );
}
