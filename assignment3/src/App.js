import Page from './Page';
import Pagination from './Pagination';
import Search from "./Search";
import Result from "./Result";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(result.data)
    }
    fetchData()
  }, [])

  const pageSize = 10;
  const numberOfPages = Math.ceil(pokemons.length / pageSize);

  return (
    <h1>
      <Search>
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      </Search>
      <Result>
        selectedTypes={selectedTypes}
      </Result>
      {/* <Page
        pokemons={pokemons}
        currentPage={currentPage}
      />
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </h1>
  );
}

export default App;
