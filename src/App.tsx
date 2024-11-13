import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GithubProfileProvider } from "./contexts/GithubProfileContext";

function App() {
  return (
    <GithubProfileProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GithubProfileProvider>
  );
}

export default App;
