import { useState } from "react";

export type UserType = "recruiter" | "user" | null;

export default function useAuth() {
  const [userType, setUserType] = useState<UserType>(null);

  const login = (type: UserType) => {
    setUserType(type);
  };

  const logout = () => {
    setUserType(null);
  };

  return { userType, login, logout };
}
