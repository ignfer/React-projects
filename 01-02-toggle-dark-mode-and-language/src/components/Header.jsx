import React from 'react';
import ToggleButton from './ToggleButton';

function Header(){
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
                    <ToggleButton/>
                </aside>

            </header>
      </>
    );
}
export default Header;