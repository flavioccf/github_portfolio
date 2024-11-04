import { GithubProfileProvider } from "../contexts/GithubProfileContext";
import { Profile } from "../components/Profile";
import { ReposList } from "../components/ReposList";

export function Home() {
  return (
    <GithubProfileProvider>
      <Profile />
      <ReposList />
    </GithubProfileProvider>
  );
}
