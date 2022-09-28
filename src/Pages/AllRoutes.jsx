import { Route, Routes } from "react-router-dom";
import FoodPage from "./FoodPage";
import Help from "./Help";
import Home from "./Home";
import KindMoments from "./KindMoments";
import MealPage from "./MealPage";
import Signup from "./Signup";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/mealpage" element={<MealPage/>}>MealPage</Route>
            <Route path="/kindmoments" element={<KindMoments/>}>KindMoments</Route>
            <Route path="/help" element={<Help/>}>Help</Route>
            <Route path="/foodpage/:see" element={<FoodPage/>}>FoodPage</Route>
            <Route path="/signup" element={<Signup/>}>Signup</Route>
        </Routes>
    )
};
