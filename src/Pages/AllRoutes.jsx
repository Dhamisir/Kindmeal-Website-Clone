import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../AuthContext/PrivateRoute";
import FoodPage from "./FoodPage";
import Help from "./Help";
import Home from "./Home";
import KindMoments from "./KindMoments";
import MealPage from "./MealPage";
import Signup from "./Signup";
import Error from "./Error";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/mealpage" element={<MealPage />}>MealPage</Route>
            <Route path="/kindmoments" element={<KindMoments />}>KindMoments</Route>
            <Route path="/help" element={<Help />}>Help</Route>
            <Route path="/foodpage/:see" element={<FoodPage />}>FoodPage</Route>
            <Route path="/signup" element={<PrivateRoute><Signup /></PrivateRoute>}>Signup</Route>
            <Route path="*" element={<Error />}>Error</Route>
        </Routes>
    )
};
