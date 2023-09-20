import React from 'react';
import ToggleButton from './ToggleButton';

function Header({handleTheme,handleLanguage}){
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
                    <ToggleButton handle={handleTheme} topic={"Theme"} firstLabel={"Light"} secondLabel={"Dark"}/>
                    <ToggleButton handle={handleLanguage} topic={"Language"} firstLabel={"ENG"} secondLabel={"ESP"}/>
                </aside>

            </header>
      </>
    );
}
export default Header;