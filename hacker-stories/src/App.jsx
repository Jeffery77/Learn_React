//import * as React from 'react'
import './App.css'

const list = [
  {
    title: 'React',
    url:   'https://react.js.org/',
    author: 'Jordan Walke',
    num_comments : 3,
    points : 4,
    objectID: 0,
  },
{

  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrea Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
}
];
const App = () => (
    <div>
  <h1>
        My Hacker Stories
      </h1>

      <Search/>

      <hr />

      <List/>

      <List/>
      </div>
  );


const  Search = () =>{
  // perform a task in between
  const handleChange = (event) => {
    // synthethic event
    console.log(event)
    // value of target (here: input HTML element)
    console.log(event.target.value)
  }

    return (
    <div> 
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

    </div>
    );
  };



const List = () =>(
    
      <div>
    
      <ul>
        {list.map((item)=>
         (<li key={item.objectID}>
            <span>
            <a href ={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
         ))
        }
      </ul>
      </div>
    
  );


export default App
