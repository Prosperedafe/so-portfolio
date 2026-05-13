import { createContext, useContext, useState, type ReactNode } from "react";

const AppContext = createContext<{
  isAppReady: boolean;
  setIsAppReady: (ready: boolean) => void;
} | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <AppContext.Provider value={{ isAppReady, setIsAppReady }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppReady = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppReady must be used within an AppProvider");
  }
  return context;
};
