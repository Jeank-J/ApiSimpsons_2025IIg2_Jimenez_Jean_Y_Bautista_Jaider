import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toolbar } from '@mui/material';

import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

import CharacterDetails from './Pages/CharacterDetails/CharacterDetails';
import EpisodeDetails from './Pages/EpisodeDetails/EpisodeDetails';
import LocationDetails from './Pages/LocationDetails/LocationDetails';
import NotFound from './Pages/NotFound/NotFound';


function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/Characters" element={<CharacterDetails />} />
                    <Route path="/Episodes" element={<EpisodeDetails />} />
                    <Route path="/Locations" element={<LocationDetails />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
