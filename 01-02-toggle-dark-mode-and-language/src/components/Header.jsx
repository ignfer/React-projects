import React from 'react';
import ToggleButton from './ToggleButton';

function Header({theme,language,handleTheme,handleLanguage}){

    const logoTheme = theme ? 'header-logo' : 'header-logo dark';
    const titleTheme = theme ? 'header-title' : 'header-title dark';
    const asideTheme = theme ? 'header-aside' : 'header-aside dark';

    return(
        <>            
        <header className='header-container'>
            <section className={logoTheme}>
            <h1>TT!</h1>
            </section>
            <section className={titleTheme}>
            <h1>Toggle Things!</h1>
            </section>
            <aside className={asideTheme}>
                <ToggleButton handle={handleTheme} topic={"Theme"} firstLabel={"Light"} secondLabel={"Dark"}/>
                <ToggleButton handle={handleLanguage} topic={"Language"} firstLabel={"ENG"} secondLabel={"ESP"}/>
            </aside>

        </header>
        </>
    );
}
export default Header;