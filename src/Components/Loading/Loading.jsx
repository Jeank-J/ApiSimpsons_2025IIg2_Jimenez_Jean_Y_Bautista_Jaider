import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = ({ preloadedImg }) => (
    <div className="loading-overlay">
        <div className="loading-card">
            <div className="loading-ring">
                {preloadedImg ? (
                    <>
                        <img src={preloadedImg} alt="" className="loading-gif" />
                        <h1>Cargando...</h1>
                    </>
                ) : null}

            </div>
        </div>
    </div>
);

export default Loading;
