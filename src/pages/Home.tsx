import { GithubProfileProvider } from "../contexts/GithubProfileContext";
import { Profile } from "../components/Profile";

export function Home() {
  return (
    <GithubProfileProvider>
      <Profile />
    </GithubProfileProvider>
  );
}
