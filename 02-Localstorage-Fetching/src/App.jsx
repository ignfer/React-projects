import { useState } from 'react';
import Note from './Note.jsx';
import Welcome from './Welcome.jsx'
import './App.css'


//let isAdmin = true;
function App() {
  
  const [isAdmin,setIsAdmin] = useState(false);

  const handleClick = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <>
      <header className='app-header'>
        <h1>Local Storage data fetching</h1>
        <p><h3>In this simple demo I researched and used the
          concept of condicional rendering to manage the tools
          availables for each user. Also, notes are created
          and stored into the local storage for later
          fetching. </h3></p>
      </header>

      <section className='app-admin-section'>
        <h3>Click to change your privileges</h3>
        <button className='app-admin-section-button'
        onClick={handleClick}></button>
      </section>

      {isAdmin ? (
        <Welcome isAdmin={isAdmin} user="admin"/>
      ) : (
        <Welcome isAdmin={isAdmin} user="user"/>
      )
      
      }

      <main>
        <Note tittle="tittle 01" description="description 01"/>
      </main>
      
    </>
  );
}

export default App
