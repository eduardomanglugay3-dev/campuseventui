import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const EventDetails = lazy(() => import("./pages/EventDetails"));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}