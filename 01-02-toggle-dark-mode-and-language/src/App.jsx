import { useState } from 'react'

import Header from './components/Header'
import ItemList from './components/ItemList';
import Footer from './components/Footer';

function App() {

  const items_spanish = ['Administrar usuarios', 'Administrar vehiculos',
'Administrar tiendas', 'Probar conexion al servidor','Cerrar sesión',
'Contactar soporte'];

  const items_english = ['Manage users', 'Manage vehicles',
  'Manage stores', 'Test connection to server', 'Log out', 'Contact support'];

  const [theme,setTheme] = useState(false);
  const [language,setLanguage] = useState(false);

  const handleTheme = () => {
      setTheme(!theme);
      console.log(theme);
  }
  
  const handleLanguage = () => {
    setLanguage(!language);
    console.log(language);
  }

  return (
    <>
      <Header theme={theme} language={language} handleTheme={handleTheme} handleLanguage={handleLanguage}/>
      {
        language === false ?
          <ItemList theme={theme} items={items_english}/>
        :
          <ItemList theme={theme} items={items_spanish} />
      }
      
      <Footer/>
    </>
  )
}

export default App
