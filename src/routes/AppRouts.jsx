import { Route, Routes } from "react-router-dom";
import { Cabs, Drivers, Home, Login } from "../pages";
import {RequiresAuth} from "./RequiresAuth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<RequiresAuth><Home /></RequiresAuth>} />
      <Route path="/drivers" element={<RequiresAuth><Drivers /></RequiresAuth>} />
      <Route path="/cabs" element={<RequiresAuth><Cabs /></RequiresAuth>} />
    </Routes>
  );
};
