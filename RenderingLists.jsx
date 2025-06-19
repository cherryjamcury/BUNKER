import React from 'react'







function getImageUrl({person}){
   return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  ); 
}
export default function RenderingLists() {
  const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];



const people2 = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


const listItems = people.map((person, i)=><li key = {i}>{person}</li>)

const chemists = people2.filter(person=>person.profession === 'chemist')


const listItems2 = chemists.map(person=><li key = {person.id + 10}>

<img
    
    src = {getImageUrl({person})}
    alt = {person.name}/>
    <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>

  </li>)
    return (
        <>
        <ul>{listItems}</ul>
         <ul>{listItems2}</ul>
       
        </>
  )
}
