import "./header.css";

function Header() {
  return (
        <header className="header">
            <h1>Palabras Encadenadas</h1>
            <p>Encadená la mayor cantidad de palabras antes de que se acabe el tiempo.</p>
            <p>Cada palabra debe comenzar con la última letra de la anterior.</p>
        </header>
    );
}

export default Header;