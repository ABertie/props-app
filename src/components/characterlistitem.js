"use client"

export default function CharacterListItem(props) {
    return (
        <li>
            <img src={props.image} alt={`Image of ${props.name}`} />
            <h3>{props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Ancestry: {props.ancestry}</p>
            <p>Species: {props.species} {props.wizard ? <span>and wizard</span> : ""}</p>
            <p>Date of birth: {props.dateOfBirth}</p>
            {props.wizard ? <p>House: {props.house}</p> : ""}
            {props.wizard ? <p>Patronus: {props.patronus}</p> : ""}
            {props.wand ? <p>Wand:</p> : ""}
            {props.wand ? <ul>
                <li>Wood: {props.wood}</li>
                <li>Core: {props.core}</li>
                <li>Inches: {props.inches}</li>
            </ul> : ""}
        </li>
    )
}