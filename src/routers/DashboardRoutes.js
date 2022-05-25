import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../components/ui/NavBar";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>
                    <Route path="react-heroes-app/marvel" element={<MarvelScreen />} />
                    <Route path="react-heroes-app/dc" element={<DcScreen />} />
                    <Route path="react-heroes-app/search" element={<SearchScreen />} />
                    <Route path="react-heroes-app/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="react-heroes-app/" element={<MarvelScreen />} />
                </Routes>

            </div>


        </>
    )
}
