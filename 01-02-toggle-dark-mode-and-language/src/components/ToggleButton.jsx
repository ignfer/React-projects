import React, { useState } from 'react';

function ToggleButton({topic,language,theme,handle}){
    var firstLabelState;
    var secondLabelState;
    var firstLabel;
    var secondLabel;

    const backgroundTheme = theme ? 'tb-background' : 'tb-background dark';
    const ballTheme = theme ? 'tb-ball' : 'tb-ball dark';

    if(topic === 'theme'){
        firstLabelState = theme ? 'tb-label-selected' : 'tb-label-unselected';
        secondLabelState = !theme ? 'tb-label-selected' : 'tb-label-unselected';
        firstLabel = language ? 'Light' : 'Claro';
        secondLabel = language ? 'Dark' : 'Oscuro';
    }else if(topic === 'language'){
        firstLabelState = language ? 'tb-label-selected' : 'tb-label-unselected';
        secondLabelState = !language ? 'tb-label-selected' : 'tb-label-unselected';
        firstLabel = 'ENG';
        secondLabel = 'ESP'
    }

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