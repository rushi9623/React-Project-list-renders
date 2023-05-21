import React from 'react'

function NameList() {
    const person = [
        {
            
            name: 'Rushikesh',
            age: 23,
            
        },
        {
            
            name: 'Sanket',
            age: 24,
            
        },
        {
            
            name: 'Rakesh',
            age: 22,
            
        },
        {
            
            name: 'Manthan',
            age: 23,
            
        },
        {
            
            name: 'Piyush',
            age: 24,
            
        },
    ]
    
    const personList = person.map(person => (
        <h2>
         {person.name}. is a {person.age}. years old. He know {person.skill}
        </h2>
        ))
  return <div>{personList}</div>
  
}

export default NameList
