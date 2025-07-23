"use client";
import { createContext, useContext, useState } from "react";

type ApplyContextType = {
  hasApplied: boolean;
  setHasApplied: (value: boolean) => void;
};

const ApplyContext = createContext<ApplyContextType | null>(null);

export const ApplyProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasApplied, setHasApplied] = useState(false);

  return (
    <ApplyContext.Provider value={{ hasApplied, setHasApplied }}>
      {children}
    </ApplyContext.Provider>
  );
};

export const useApply = () => {
  const context = useContext(ApplyContext);
  if (!context) throw new Error("useApply must be used inside ApplyProvider");
  return context;
};
