import React from 'react';
import ToggleButton from './ToggleButton';

function Header({theme,language,handleTheme,handleLanguage}){

    const containerTheme = theme ? 'header-container' : 'header-container dark';
    const logoTheme = theme ? 'header-logo' : 'header-logo dark';
    const titleTheme = theme ? 'header-title' : 'header-title dark';
    const asideTheme = theme ? 'header-aside' : 'header-aside dark';

    return(
        <>            
        <header className={containerTheme}>
            <section className={logoTheme}>
            <h1>
                {language ? 'CC!' : 'TT!'}
            </h1>
            </section>
            <section className={titleTheme}>
            <h1>
                {language ? 'Cambia Cosas!' :'Toggle Things!'}
            </h1>
            </section>
            <aside className={asideTheme}>
                <ToggleButton topic={'theme'} language={language} theme={theme} handle={handleTheme}/>
                <ToggleButton topic={'language'} language={language} theme={theme} handle={handleLanguage}/>
            </aside>

        </header>
        </>
    );
}
export default Header;