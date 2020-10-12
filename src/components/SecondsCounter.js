import React, { useState, useEffect } from 'react';
import '../App.css'

function SecondsCounter() {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        seconds >= 0 ? setTimeout(() => setSeconds(seconds + 1), 1000) : alert('rango no válido');
        //console.log(seconds);

    });

    return (
        <>
        <div className="row"><h1>Basic Counter</h1></div>
        <br/><br/>
        <div className="box">
            <div className="row mt-4">
                <div className="contenedor">
                    <div className="clock">
                        <span>
                            <svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-clock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className= "contenedor" id="numbers"><h1>{seconds}</h1></div>
            </div>
        </div>

        </>
    );
}

export default SecondsCounter;