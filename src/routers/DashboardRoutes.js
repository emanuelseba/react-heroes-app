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
                    <Route path={process.env.PUBLIC_URL+"marvel"} element={<MarvelScreen />} />
                    <Route path={process.env.PUBLIC_URL+"dc"} element={<DcScreen />} />
                    <Route path={process.env.PUBLIC_URL+"search"} element={<SearchScreen />} />
                    <Route path={process.env.PUBLIC_URL+"hero/:heroeId"} element={<HeroScreen />} />
                    <Route path={process.env.PUBLIC_URL+"/"} element={<MarvelScreen />} />
                </Routes>

            </div>


        </>
    )
}
