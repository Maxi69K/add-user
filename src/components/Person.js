import React from 'react'

const Person = ({person}) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.deposit}</td>
      <td>{person.cCard}</td>
    </tr>
  )
}

export default Person;