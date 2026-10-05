import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-5 text-center">
      <div className="container py-5">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="lead">Halaman yang kamu cari tidak ditemukan.</p>
        <Link to="/" className="btn btn-dark">Kembali ke Beranda</Link>
      </div>
    </section>
  );
};

export default NotFound;
