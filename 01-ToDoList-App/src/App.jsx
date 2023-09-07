import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ToDoItem } from './ToDoItem.jsx';

const itemList = [
  {
    tittle: "Buy milk",
    description: "I should buy milk before monday."
  },
  {
    tittle: "Research about protein",
    description: "I think is so weird"
  },
  {
    tittle: "Buy bread",
    description: "I really have to buy bread",
  },
  {
    tittle: "Watch Zuckerberg's lecture",
    description: "Maybe I can learn something."
  },
  {
    tittle: "Read about react",
    description: "I heard is very niche."
  }
];

function App() {

  return (
    <>
      <header>
        <h1> To-Do List </h1>
      </header>
      <section>
        <p>
          The main objective of this small app is to get used to <strong>React</strong> and the
          concept of states, hooks, and reutilizable components. To spend time
          on the important things we will work the whole development of this
          project on <strong>stackblitz</strong> wich provide us with a
          pre-configurated envivorment for developing on react and using{' '}
          <strong>Vite</strong>.
        </p>
        <p>We acomplished the task of creating reusable and reactive items, cycling throug an array of already declarated items, the next step is to be able to create this components on demand and see if we could make the page react to that change</p>
      </section>
      <main className="tdi-container">
        {
          itemList.map( item => {
            const {tittle,description} = item;

            return (
            <ToDoItem tittle={tittle} description={description}/>
            );
          })
        }
      </main>

      <footer>
        <h3>Contact me:</h3>
        <p>
          <ul>
            <li>Author: Ignacio Fernández</li>
            <li><a href="https://github.com/ignfer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ignaciofernández/">Linkedin</a></li>
          </ul>
        </p>
      </footer>
    </>
  );
}

export default App;
