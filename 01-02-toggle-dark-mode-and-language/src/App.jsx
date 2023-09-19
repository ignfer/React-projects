import { useState } from 'react'

import Header from './components/Header'

function App() {

  const [theme,setTheme] = useState(false);
  const [language,setLanguage] = useState(false);

  function handleClick (state,setState){
    setState=(!state);
    console.log(state);
  }

  return (
    <>
      <Header handleClick={handleClick} theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      
      <body>
          <ul className='menu-list'>
            <li className='menu-item'>Administrar usuarios</li>
            <li className='menu-item'>Administrar vehiculos</li>
            <li className='menu-item'>Administrar sucursales</li>
            <li className='menu-item'>Probar conexion al servidor</li>
            <li className='menu-item'>Cerrar sesion</li>
            <li className='menu-item'>Contactar soporte</li>
          </ul>
      </body>
      <footer>
        <h5>Footer placeholder</h5>
      </footer>
    </>
  )
}

export default App
