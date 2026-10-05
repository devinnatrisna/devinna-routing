const KartuProfil = ({ foto, nama, children }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center p-4">
        <img
          src={foto}
          alt={`Foto ${nama}`}
          className="foto-profil rounded-circle border border-dark border-4 mb-3"
        />
        <h3 className="card-title">{nama}</h3>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
};

export default KartuProfil;
