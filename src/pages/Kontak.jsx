import JudulHalaman from '../components/JudulHalaman';

const Kontak = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <JudulHalaman>Kontak</JudulHalaman>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <p>Email: <a href="mailto:vinnatrisna13@gmail.com">vinnatrisna13@gmail.com</a></p>
                <p>WhatsApp: 0812-2438-5242</p>
                <p>Instagram: <a href="https://www.instagram.com/dv_xzyn" target="_blank" rel="noreferrer">@dv.xzyn</a></p>
                <p className="mb-0">Alamat: Bandung, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
