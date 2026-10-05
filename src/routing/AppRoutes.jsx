import { Routes, Route } from 'react-router-dom';
import Beranda from '../pages/Beranda';
import Tentang from '../pages/Tentang';
import Galeri from '../pages/Galeri';
import Kontak from '../pages/Kontak';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
