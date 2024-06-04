export function Header() {
  const name = "Aditify";

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="./logo.png" alt="Music Logo" width="50" />
          <h1>{name ? name : "Tanpa Nama"}</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#songs">Songs</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </div>
    </header>
  );
}
