import { HashRouter, Routes, Route } from 'react-router-dom'
import { Toolbar, Box } from '@mui/material'

import './App.css'
import Header from './Components/Header/Header'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

import CharacterDetails from './Pages/CharacterDetails/CharacterDetails'
import CharacterId from './Pages/CharacterId/CharacterId'
import EpisodeDetails from './Pages/EpisodeDetails/EpisodeDetails'
import LocationDetails from './Pages/LocationDetails/LocationDetails'
import LocationDetail from './Pages/LocationDetail/LocationDetail'
import NotFound from './Pages/NotFound/NotFound'

function App() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HashRouter>
                <ScrollToTop />
                <Header />
                <Toolbar />

                <Box component="main" sx={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/Characters" element={<CharacterDetails />} />
                        <Route path="/Characters/:id" element={<CharacterId />} />
                        <Route path="/Episodes" element={<EpisodeDetails />} />
                        <Route path="/Locations" element={<LocationDetails />} />
                        <Route path="/location/:id" element={<LocationDetail />} />
                    </Routes>
                </Box>
            </HashRouter>

            <Footer />
        </Box>
    )
}



export default App
