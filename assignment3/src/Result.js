import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Result({ selectedTypes }) {
    const [pokemons, setPokemon] = useState([])

    useEffect(() =>  {
        async function fetchData() {
            const res = await axios.get("http://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
            setPokemon(res.data)
        }
        fetchData()
    }, [])

    return (
        // <div>
        //     {
        //         pokemons.map(pokemon => {
        //             if (selectedTypes.every(type => pokemon.type.includes(type))) {
        //                 return <div>{pokemon.name.english}</div>
        //             }
        //         })
        //     }
        // </div>
        <div>Result</div>
    )
}

export default Result;