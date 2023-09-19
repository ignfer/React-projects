import React, { useState } from 'react';

function ToggleButton({handleClick,state,setState,firstLabel,secondLabel}){

    const firstLabelState = state ? 'tb-label-selected' : 'tb-label-unselected';
    const secondLabelState = !state ? 'tb-label-selected' : 'tb-label-unselected';

    return(
    <>
        <div className='tb-container'>
            <header className='tb-head'>
                <label className={firstLabelState}>{firstLabel}</label>
                <label className={secondLabelState}>{secondLabel}</label>
            </header>
            <main className='tb-body' onClick={handleClick}>
                <div className='tb-background'>
                    <div className='tb-ball'></div>
                </div>
            </main>
        </div>
    </>
    );
}

export default  ToggleButton;