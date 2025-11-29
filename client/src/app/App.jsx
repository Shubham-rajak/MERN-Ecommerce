import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Loader } from "@components/Loader";
import { ComponentShowcase } from "@components/ComponentShowcase";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <ComponentShowcase />
        <AppRoutes />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
