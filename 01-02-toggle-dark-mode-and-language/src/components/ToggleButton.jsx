import React, { useState } from 'react';

function ToggleButton({topic,language,theme,handle}){

    const backgroundTheme = theme ? 'tb-background' : 'tb-background dark';
    const ballTheme = theme ? 'tb-ball' : 'tb-ball dark';

    if(topic === 'theme'){
        /*we check the corresponding state to render the correct
        selected label*/
        var firstLabelState = theme ? 'tb-label-selected' : 'tb-label-unselected';
        var secondLabelState = !theme ? 'tb-label-selected' : 'tb-label-unselected';
        /*aditionally, if the togglebutton re-rendering is the theme
        one, we check for the language selected to give a correct
        label*/
        var firstLabel = language ? 'Light' : 'Claro';
        var secondLabel = language ? 'Dark' : 'Oscuro';
    }else if(topic === 'language'){
        /*we check the corresponding state to render the correct
        selected label*/
        var firstLabelState = language ? 'tb-label-selected' : 'tb-label-unselected';
        var secondLabelState = !language ? 'tb-label-selected' : 'tb-label-unselected';
        var firstLabel = 'ENG';
        var secondLabel = 'ESP'
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