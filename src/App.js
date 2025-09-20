import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  userRoutes } from "./routes/AllRoutes";
import UserLayout from "./routes/middleware/UserLayout";
import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import "aos/dist/aos.css";
const App = () => {
 

  const renderUserRoutes = (routes) => {
    return routes.map((route, idx) => (
      <Route
        key={idx}
        path={route.path}
        element={<UserLayout>{route.component}</UserLayout>}
      />
    ));
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <AuthProvider>
          <div>
            <Routes>
              {renderUserRoutes(userRoutes)}
            </Routes>
            <Toaster></Toaster>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
