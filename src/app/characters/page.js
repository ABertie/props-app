"use client"

import CharacterListItem from "@/components/characterlistitem"
import { useEffect, useState } from "react"

export default function Characters() {
  const [characters, setCharacters] = useState([])
 
  useEffect(function() {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data);
        setCharacters(data)
      })
  }, [])

  return (
    <main>
      <ul>
        {characters.map(character => <CharacterListItem key={character.id} 
            image={character.image}
            name={character.name} 
            gender={character.gender}
            ancestry={character.ancestry ? character.ancestry : "none"}
            species={character.species}
            wizard={character.wizard}
            dateOfBirth={character.dateOfBirth ? character.dateOfBirth : "unknown"}
            house={character.house ? character.house : "none"}
            patronus={character.patronus ? character.patronus : "unknown"}
            wand={character.wand.wood ? true : false}
            core={character.wand.core ? character.wand.core : "unknown"}
            inches={character.wand.length ? character.wand.length : "unknown"}
            wood={character.wand.wood ? character.wand.wood : "unknown"}
        />)}
      </ul>
    </main>
  )
}