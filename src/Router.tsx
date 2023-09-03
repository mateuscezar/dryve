import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicle } from "./pages/Vehicle";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { VehicleForm } from "./pages/VehicleForm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/promotion" element={<Home />} />
        <Route path="/calendar" element={<Home />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/release" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/analytics" element={<Home />} />
        <Route path="/financing" element={<Home />} />
        <Route path="/vehicle/new" element={<VehicleForm />} />
      </Route>
    </Routes>
  );
}
