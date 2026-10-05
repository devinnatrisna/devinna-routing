import { Link } from 'react-router-dom';
import JudulHalaman from '../components/JudulHalaman';
import FotoGaleri from '../components/FotoGaleri';

const fotoPreview = [
  { src: '/foto/cafe.jpeg', alt: 'Foto 2' },
  { src: '/foto/kucing.jpeg', alt: 'Foto 5' },
  { src: '/foto/renang.jpeg', alt: 'Foto 6' },
];

const Beranda = () => {
  return (
    <>
      <section className="bg-dark text-white text-center hero">
        <div className="container py-5">
          <h1 className="display-3 fw-bold">Halo, Saya Devinna</h1>
          <p className="lead mb-2">Mahasiswa Pendidikan Ilmu Komputer</p>
          <p className="text-white-50 mb-0">
            Selamat datang di website profil pribadi saya.
          </p>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <JudulHalaman>Tentang Saya</JudulHalaman>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p>
                Mahasiswa Pendidikan Ilmu Komputer yang tertarik pada teknologi.
                Di waktu luang, saya senang <i>travelling</i>, fotografi,
                bermain <i>billiard</i>, dan menghabiskan waktu bersama kucing.
              </p>
              <Link to="/tentang" className="btn btn-dark">Baca selengkapnya</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <JudulHalaman>Galeri Foto</JudulHalaman>
          <div className="row g-3 mb-4">
            {fotoPreview.map((item) => (
              <div className="col-12 col-md-4" key={item.src}>
                <FotoGaleri src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/galeri" className="btn btn-dark">Lihat semua foto</Link>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <JudulHalaman>Kontak</JudulHalaman>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <p className="mb-1">
                Email: <a href="mailto:vinnatrisna13@gmail.com">vinnatrisna13@gmail.com</a>
              </p>
              <p className="mb-4">Alamat: Bandung, Indonesia</p>
              <Link to="/kontak" className="btn btn-dark">Hubungi saya</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beranda;