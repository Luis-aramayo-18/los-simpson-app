import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Character from "./components/Character";
import Pagination from "./components/Pagination";


function App() {

  const API_CHARACTER = "https://rickandmortyapi.com/api/character"

  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState({})
  const [prevPage, setPrevPage] = useState({})

  const fetchCharacter = (url)=>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setPrevPage(data.info.prev)
        setNextPage(data.info.next)
      })

      .catch(error => console.log(error)) 
  };

  const onPrevious = ()=>{
    fetchCharacter(prevPage);
  }

  const onNext = ()=>{
    fetchCharacter(nextPage);
  }



  useEffect(() => {
    fetchCharacter(API_CHARACTER)
  }, [])

  
  return (
    <>
      <Navbar brand="Rick and Morty"/>

      <div className="container mt-5">
        <Pagination prev={prevPage} next={nextPage} onPrevious={onPrevious} onNext={onNext}/>
        <Character personajes={characters}/>
        <Pagination prev={prevPage} next={nextPage} onPrevious={onPrevious} onNext={onNext}/>
      </div>
      </>
  );
}

export default App;
