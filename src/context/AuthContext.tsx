// AuthContext.tsx
import { createContext, useContext, useState } from "react";

export type UserType = "recruiter" | "user" | null;

const AuthContext = createContext<{
  userType: UserType;
  login: (type: UserType) => void;
  logout: () => void;
}>({
  userType: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null);

  const login = (type: UserType) => setUserType(type);
  const logout = () => setUserType(null);

  return (
    <AuthContext.Provider value={{ userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
