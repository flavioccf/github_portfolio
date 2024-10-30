import { type ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface GithubProfileType {
  name: string;
  avatar_url: string;
  bio: string | null;
  company: string;
  followers: number;
  html_url: string;
  location: string;
  login: string;
}

interface GithubProfileContextType {
  githubProfile: GithubProfileType | null;
}

interface GithubProfileProviderProps {
  children: ReactNode;
}

export const GithubProfileContext = createContext<GithubProfileContextType>(
  {} as GithubProfileContextType
);

export function GithubProfileProvider({
  children,
}: GithubProfileProviderProps) {
  const [githubProfile, setGithubProfile] = useState<GithubProfileType | null>(
    null
  );

  const fetchGithubProfile = useCallback(async (id: string) => {
    const response = await api.get(`/${id}`);
    console.log(response.data);
    setGithubProfile(response.data);
  }, []);

  useEffect(() => {
    fetchGithubProfile("flavioccf");
  }, [fetchGithubProfile]);

  return (
    <GithubProfileContext.Provider value={{ githubProfile }}>
      {children}
    </GithubProfileContext.Provider>
  );
}
