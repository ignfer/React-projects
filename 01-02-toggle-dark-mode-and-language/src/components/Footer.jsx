import React from 'react';
import '../styles/Footer.css'

function Footer({theme}){
    
    const containerTheme = theme ? 'footer-container':'footer-container dark';

    return(
        <>
         <footer className={containerTheme}>
            <h5>Footer placeholder</h5>
         </footer>
        </>
    );
}

export default Footer;