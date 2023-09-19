import React from 'react';
import ToggleButton from './ToggleButton';

function Header({handleClick,theme,setTheme,language,setLanguage}){
    return(
        <>
            <header className='header-container'>
                <section className='header-logo'>
                <h1>TT!</h1>
                </section>
                <section className='header-title'>
                <h1>Toggle Things!</h1>
                </section>
                <aside className='header-aside'>
                    <ToggleButton handleClick={handleClick} state={theme} setState={setTheme} firstLabel={"Light"} secondLabel={"Dark"}/>
                    <ToggleButton handleClick={handleClick} state={language} setState={setLanguage} firstLabel={"ENG"} secondLabel={"ESP"}/>
                </aside>

            </header>
      </>
    );
}
export default Header;