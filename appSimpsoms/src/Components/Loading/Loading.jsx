import React from 'react'
import LoadingBart1 from '../../assets/LoadingBart.gif'
import LoadingBart2 from '../../assets/LoadingBart2.gif'
import LoadingHomero1 from '../../assets/LoadingHomero.gif'
import LoadingHomero2 from '../../assets/LoadingHomero2.gif'
import LoadingHomero3 from '../../assets/LoadingHomero3.gif'
import LoadingHomero4 from '../../assets/LoadingHomero4.gif'
import LoadingHomero5 from '../../assets/LoadingHomero5.gif'
import LoadingLenny from '../../assets/LoadingLenny.gif'
import LoadingLisa from '../../assets/LoadingLisa.gif'
import LoadingPayaso from '../../assets/LoadingPayaso.gif'
import LoadingRafael from '../../assets/LoadingRafa.gif'
import LoadingWilly from '../../assets/LoadingWilly.gif'
import './Loading.css'

const Loading = () => {
    const loadingImages = [
        LoadingBart1,
        LoadingBart2,
        LoadingHomero1,
        LoadingHomero2,
        LoadingHomero3,
        LoadingHomero4,
        LoadingHomero5,
        LoadingLenny,
        LoadingLisa,
        LoadingPayaso,
        LoadingRafael,
        LoadingWilly,
    ];

    const randomImage = loadingImages[Math.floor(Math.random() * loadingImages.length)];
    return (
        <div className="loading-overlay" >
            <div className="loading-card">
                <div className="loading-ring">
                    <img src={randomImage} alt="Cargando" className="loading-gif" />
                </div>
            </div>
        </div>
    )
}

export default Loading
