import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { Movie } from "./pages/Movie"


export const SiteRoutes = () => {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="movie/:id" element={<Movie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}