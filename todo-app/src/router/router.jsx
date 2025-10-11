import {createBrowserRouter} from "react-router-dom"
import Search from "../pages/Search"
import CarCard from "../components/CarCard"

export const router = createBrowserRouter([{path: "/", element: <Search/>},
    {path: "car/:id",
    element: <CarCard/>}
])