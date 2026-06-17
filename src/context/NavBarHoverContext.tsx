"use client";

import { createContext, useContext, useState } from "react";

interface NavBarHoverContextValue {
  hoveredLabel: string | null;
  setHoveredLabel: (label: string | null) => void;
}

const NavBarHoverContext = createContext<NavBarHoverContextValue>({
  hoveredLabel: null,
  setHoveredLabel: () => {},
});

export function NavBarHoverProvider({ children }: { children: React.ReactNode }) {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  return (
    <NavBarHoverContext.Provider value={{ hoveredLabel, setHoveredLabel }}>
      {children}
    </NavBarHoverContext.Provider>
  );
}

export function useNavBarHover() {
  return useContext(NavBarHoverContext);
}
