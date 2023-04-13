import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Character from "./components/Character";


function App() {

  const API_CHARACTER_SIMPSON = "https://apisimpsons.fly.dev/api/personajes"

  const [characters, setCharacters] = useState([]);

  const character = ()=>{
    fetch(API_CHARACTER_SIMPSON)
      .then(response => response.json())
      .then(data => setCharacters(data.docs))

      .catch(error => console.log(error)) 
  };

  useEffect(() => {
    character(API_CHARACTER_SIMPSON)
  }, [])
  
  return (
    <>
      <Navbar brand="Los Simpson App"/>

      <div className="container mt-5">
        <Character personajes={characters}/>
      </div>
      </>
  );
}

export default App;
