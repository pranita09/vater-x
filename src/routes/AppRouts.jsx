import { Route, Routes } from "react-router-dom";
import { Cabs, Drivers, Home, Login } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/cabs" element={<Cabs />} />
    </Routes>
  );
};
