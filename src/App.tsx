import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";
import { useState } from "react";
import { AppProvider, useAppReady } from "./context/app-context";
import { Preloader } from "./components/preloader";

function AppContent() {
  const { isAppReady, setIsAppReady } = useAppReady();
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && (
        <Preloader
          onComplete={() => {
            setShowPreloader(false);
            setIsAppReady(true);
          }}
        />
      )}
      <div className={`${!isAppReady ? "h-screen overflow-hidden" : ""}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
