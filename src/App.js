import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Character from "./components/Character";
import Pagination from "./components/Pagination";

function App() {
  const [search, setSearch] = useState("");
  const [wantedCharacter, setWantedCharacter] = useState([]);

  const API_CHARACTER = "https://rickandmortyapi.com/api/character";
  const CHARACTER_SEARCH = `https://rickandmortyapi.com/api/character/?name=${search}`;

  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState({});
  const [prevPage, setPrevPage] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPrevPage(data.info.prev);
        setNextPage(data.info.next);
      })

      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacter(prevPage);
  };

  const onNext = () => {
    fetchCharacter(nextPage);
  };

  useEffect(() => {
    fetchCharacter(API_CHARACTER);
  }, []);

  const handleChange = (e) => {
    let pje = e.target.value;
    setSearch(pje);
  };

  const watchAllCharacters = () => {
    fetchCharacter(API_CHARACTER);
  };

  const searchCharacter = (e) => {
    e.preventDefault();
    fetch(CHARACTER_SEARCH)
      .then((response) => response.json())
      .then((data) => {
        setWantedCharacter(data.results);
      });
    setCharacters(wantedCharacter);
  };

  // let resultSearch = characters.filter((item)=>{
  //   if(item.name.toString().toLowerCase().includes(character.toLowerCase())){
  //     return item;
  //   }
  // });
  // setCharacters(resultSearch)

  return (
    <>
      <Navbar brand="Rick and Morty" />

      <div className="container mt-5">
        <div>
          <form className="form-input" onSubmit={searchCharacter}>
            <input
              type="text"
              className="form-control inputBuscar mb-3"
              placeholder="Buscar personaje por el nombre"
              onChange={handleChange}
            />
            <button className="btn btn-outline-dark mx-3" type="submit">
              Buscar
            </button>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={watchAllCharacters}
            >
              Ver odos los personajes
            </button>
          </form>
        </div>

        <hr />
          <Pagination
            prev={prevPage}
            next={nextPage}
            onPrevious={onPrevious}
            onNext={onNext}
          />

        <Character
          wantedCharacter={wantedCharacter}
          characters={characters}
          isOpen={isOpen}
          selectCharacter={(character) => {
            setIsOpen(true);
            setCurrentCharacter(character);
          }}
          currentCharacter={currentCharacter}
        />

          <Pagination
            prev={prevPage}
            next={nextPage}
            onPrevious={onPrevious}
            onNext={onNext}
          />
      </div>
    </>
  );
}

export default App;
