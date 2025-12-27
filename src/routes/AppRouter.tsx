import type {FunctionComponent} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./paths.ts";
import {About, Achievements, Contact, FooterFragment, HeaderFragment, Home, Parcours, Skills, NotFound} from "./imports.ts";

const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <HeaderFragment/>
            <main className="main">
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home/>}/>
                    <Route path={ROUTES.PARCOURS} element={<Parcours/>}/>
                    <Route path={ROUTES.SKILLS} element={<Skills/>}/>
                    <Route path={ROUTES.ACHIEVEMENTS} element={<Achievements/>}/>
                    <Route path={ROUTES.ABOUT} element={<About/>}/>
                    <Route path={ROUTES.CONTACT} element={<Contact/>}/>
                    <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
                </Routes>
            </main>
            <FooterFragment/>
        </BrowserRouter>
    );
}

export default AppRouter;