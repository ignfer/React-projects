import React, { useState } from 'react';

function ToggleButton({theme,handle,firstLabel,secondLabel}){

    const firstLabelState = theme ? 'tb-label-selected' : 'tb-label-unselected';
    const secondLabelState = !theme ? 'tb-label-selected' : 'tb-label-unselected';
    
    const backgroundTheme = theme ? 'tb-background' : 'tb-background dark';
    const ballTheme = theme ? 'tb-ball' : 'tb-ball dark';


    return(
    <>
        <div className='tb-container'>
            <header className='tb-head'>
                <label className={firstLabelState}>{firstLabel}</label>
                <label className={secondLabelState}>{secondLabel}</label>
            </header>
            <main className='tb-body'>
                <div className={backgroundTheme}>
                    <div className={ballTheme} onClick={handle}></div>
                </div>
            </main>
        </div>
    </>
    );
}

export default  ToggleButton;