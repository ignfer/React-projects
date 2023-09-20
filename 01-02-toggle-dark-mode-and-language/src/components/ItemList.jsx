import React from 'react';
import '../styles/ItemList.css'

function ItemList({}){
    return(
        <>
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
        </>
    );
}

export default ItemList;