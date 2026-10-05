import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Kembali ke atas halaman setiap kali pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
