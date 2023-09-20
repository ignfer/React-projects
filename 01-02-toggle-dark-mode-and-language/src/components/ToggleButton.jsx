import React, { useState } from 'react';

function ToggleButton({theme,handle,firstLabel,secondLabel}){

    const firstLabelState = theme ? 'tb-label-selected' : 'tb-label-unselected';
    const secondLabelState = !theme ? 'tb-label-selected' : 'tb-label-unselected';

    return(
    <>
        <div className='tb-container'>
            <header className='tb-head'>
                <label className={firstLabelState}>{firstLabel}</label>
                <label className={secondLabelState}>{secondLabel}</label>
            </header>
            <main className='tb-body'>
                <div className='tb-background'>
                    <div className='tb-ball' onClick={handle}></div>
                </div>
            </main>
        </div>
    </>
    );
}

export default  ToggleButton;