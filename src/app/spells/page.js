"use client"

import SpellListItem from "@/components/spelllistitem"
import { useEffect, useState } from "react"

export default function Spells() {
  const [spells, setSpell] = useState([])
 
  useEffect(function() {
    fetch("https://hp-api.onrender.com/api/spells")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        setSpell(data)
      })
  }, [])

  return (
    <main>
      <ul>
        {spells.map(spell => <SpellListItem key={spell.name} name={spell.name} description={spell.description}/>)}
      </ul>
    </main>
  )
}
