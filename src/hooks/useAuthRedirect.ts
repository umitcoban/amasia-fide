import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const useAuthRedirect = async (redirectPath:string) => {
  const router = useRouter();
  const token = useSelector((state:any) => state.auth.token);
  const localStorageToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (token || localStorageToken) {
      router.push(redirectPath);
    }
  }, [token, localStorageToken, router, redirectPath]);
};
