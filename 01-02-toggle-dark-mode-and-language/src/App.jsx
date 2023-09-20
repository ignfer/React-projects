import { useState } from 'react'

import Header from './components/Header'
import ItemList from './components/ItemList';
import Footer from './components/Footer';

function App() {
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
      <ItemList/>
      <Footer/>
    </>
  )
}

export default App
