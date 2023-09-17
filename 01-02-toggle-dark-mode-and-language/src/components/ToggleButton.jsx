import React from 'react';

function ToggleButton({isEnabled,disabledLabel,enabledLabel}){
    return(
    <>
        <div className='tb-container'>
            <header className='tb-head'>
                <label className='tb-enabled-label'>a</label>
                <label className='tb-disabled-label'>b</label>
            </header>
            <body className='tb-body'>
                <div className='tb-background'>
                    <div className='tb-ball'></div>
                </div>
            </body>
        </div>
    </>
    );
}

export default  ToggleButton;