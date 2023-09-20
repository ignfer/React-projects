import React from 'react';
import '../styles/ItemList.css'

function ItemList({theme,items}){

    const containerTheme = theme ? 'menu-container':'menu-container dark';
    const listTheme = theme ? 'menu-list':'menu-list dark';
    const itemTheme = theme ? 'menu-item':'menu-item dark';

    return(
        <>
            <body className={containerTheme}>
                <ul className={listTheme}>
                    {/* <li className={itemTheme}>Administrar usuarios</li>
                    <li className={itemTheme}>Administrar vehiculos</li>
                    <li className={itemTheme}>Administrar sucursales</li>
                    <li className={itemTheme}>Probar conexion al servidor</li>
                    <li className={itemTheme}>Cerrar sesion</li>
                    <li className={itemTheme}>Contactar soporte</li> */}
                    {
                    items.map((item, index) => (
                        <li className={itemTheme} key={index}>{item}</li>
                    ))
                    }
                </ul>
            </body>
        </>
    );
}

export default ItemList;