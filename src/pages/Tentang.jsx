import JudulHalaman from '../components/JudulHalaman';
import KartuProfil from '../components/KartuProfil';

const Tentang = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <JudulHalaman>Tentang Saya</JudulHalaman>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <KartuProfil foto="/foto/hijab.jpeg" nama="Devinna Trisna">
              Seorang mahasiswa Pendidikan Ilmu Komputer yang memiliki ketertarikan
              pada teknologi dan berbagai aktivitas di luar perkuliahan.
              Di waktu luang, saya senang <i>travelling</i> dan menjelajahi
              tempat-tempat bernuansa alam, mengabadikan momen melalui fotografi,
              serta bermain <i>billiard</i>. Saya juga merupakan seorang{' '}
              <i>cat lover</i> yang selalu senang menghabiskan waktu bersama kucing.
            </KartuProfil>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
