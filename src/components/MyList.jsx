const songs = [
  {
    id: 1,
    namaPenyanyi : "Bruno Mars",
    namaLagu : "Talking to The Moon",
    band : "Bruno Mars",
    foto : "./1.jpg"
  },  {
    id: 3,
    namaPenyanyi : "Billie Eilish",
    namaLagu : "When The Parties Over",
    band : "Billie Eilish",
    foto : "./3.jpg"
  }, {
    id: 4,
    namaPenyanyi : "Jhon Legend",
    namaLagu : "All of Me",
    band : "Jhon Legend",
    foto : "./4.jpg"
  }, {
    id: 5,
    namaPenyanyi : "Judika",
    namaLagu : "Aku yang Tersakiti",
    band : "Judika",
    foto : "./5.jpg"
  }, {
    id: 6,
    namaPenyanyi : "Lyodra Ginting",
    namaLagu : "Terlanjur Mencinta",
    band : "Lyodra",
    foto : "./6.jpeg"
  },  {
    id: 8,
    namaPenyanyi : "Dunchan Laurence",
    namaLagu : "Arcade",
    band : "Dunchan",
    foto : "./8.jpg"
  }, {
    id: 9,
    namaPenyanyi : "Yoasobi",
    namaLagu : "Monster",
    band : "Yoasobi",
    foto : "./9.jpg"
  }, {
    id: 10,
    namaPenyanyi : "Ikimonogatari",
    namaLagu : "Blue Bird",
    band : "Lisa",
    foto : "./10.jpg"
  },
  
];
export function MyList() {
  return (
    <div className="badan">
      <ul className="song-grid">
        {songs.map((s) => (
          <div key={s.id} className="song-item">
            <img src={s.foto} alt={s.nama} width="100" className="foto" />
            <div>
              <h2>{s.namaPenyanyi}</h2>
              <hr />
              <h3>{s.namaLagu}</h3>
              <h4>{s.band}</h4>
                <button className="tombol" onClick={() => alert("Penyanyi : " +s.namaPenyanyi +"\n" + "Nama Band : "+ s.band + "\n" + "Lagu : " +s.namaLagu)}>Lihat selengkapnya</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
