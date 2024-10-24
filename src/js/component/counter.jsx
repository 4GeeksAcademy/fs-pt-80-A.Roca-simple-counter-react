import React from "react";
import clock from "../../img/clock.png";

export const Counter = ({ timer }) => {
    const seis = Math.floor(timer / 100000) % 10;
    const cinco = Math.floor(timer / 10000) % 10;
    const cuatro = Math.floor(timer / 1000) % 10;
    const tres = Math.floor(timer / 100) % 10;
    const dos = Math.floor(timer / 10) % 10;
    const uno = Math.floor(timer / 1) % 10;
    return (
        <div className="mainBox">
            <div className="box">
                <div className="box1"><img className="image" src={clock} alt="rigo" /></div>
                <div>{seis}</div>
                <div>{cinco}</div>
                <div>{cuatro}</div>
                <div>{tres}</div>
                <div>{dos}</div>
                <div className="pe-4">{uno}</div>
            </div>
        </div>
    )
};