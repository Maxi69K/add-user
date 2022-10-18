import React from "react";
import Person from "./Person";

const PersonsList = ({data}) => {
    const listOfPersons = data.map((person) => {
        return (
            <Person person={person} key={person.id}/>
        )
    })

    return <tbody>{listOfPersons}</tbody>
}

export default PersonsList;