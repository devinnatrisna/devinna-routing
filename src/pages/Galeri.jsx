import JudulHalaman from '../components/JudulHalaman';
import FotoGaleri from '../components/FotoGaleri';

const foto = [
  { src: '/foto/billiard.jpeg', alt: 'Foto 1' },
  { src: '/foto/cafe.jpeg', alt: 'Foto 2' },
  { src: '/foto/game.jpeg', alt: 'Foto 3' },
  { src: '/foto/konvoi.jpeg', alt: 'Foto 4' },
  { src: '/foto/kucing.jpeg', alt: 'Foto 5' },
  { src: '/foto/renang.jpeg', alt: 'Foto 6' },
];

const Galeri = () => {
  return (
    <section className="py-5">
      <div className="container">
        <JudulHalaman>Galeri Foto</JudulHalaman>

        <div className="row g-3">
          {foto.map((item) => (
            <div className="col-12 col-md-4" key={item.src}>
              <FotoGaleri src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
