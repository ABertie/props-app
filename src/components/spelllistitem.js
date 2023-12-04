"use client"

export default function SpellListItem(props) {
    return (
        <li>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </li>
    )
}