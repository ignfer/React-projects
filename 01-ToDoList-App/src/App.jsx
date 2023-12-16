import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ToDoItem from '../components/ToDoItem/ToDoItem.jsx';
import ProjectDescription from '../components/ProjectDescription/ProjectDescription.jsx';

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
  let index = 0;

  return (
    <>
      <ProjectDescription/>
      <main className="tdi-container">
        {
          itemList.map((item) => {
            index += 1;
            return (
            <ToDoItem key={index} index={index} tittle={item.tittle} description={item.description}/>
            );
          })
        }
      </main>
    </>
  );
}

export default App;
