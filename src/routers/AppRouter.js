import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                            <PublicRouter>
                                <LoginScreen />
                            </PublicRouter>
                        } />

                    <Route path='/*' element={
                            <PrivateRoute >
                                <DashboardRoutes />
                            </PrivateRoute>
                                } 
                                />
                    {/* <Route path='/*' element={<DashboardRoutes />} /> */}
                </Routes>
            </BrowserRouter>

        </div>
    )
}
