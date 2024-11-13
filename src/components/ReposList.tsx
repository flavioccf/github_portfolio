import { useContextSelector } from "use-context-selector";
import { GithubProfileContext } from "../contexts/GithubProfileContext";
import { formatDistanceToNow } from "date-fns";
import { reformatTitle } from "../lib/utils";
import { Link } from "react-router-dom";

export function ReposList() {
  const githubRepos = useContextSelector(
    GithubProfileContext,
    (context) => context?.githubRepos
  );
  return (
    <>
      <section className="w-11/12 md:max-w-[864px] m-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-10">
        {githubRepos.map((repo) => {
          return (
            <Link
              to={`repo/${repo.id}`}
              key={repo.id}
              className="w-full rounded-md shadow-lg bg-base-post p-8 flex flex-col gap-2 items-start justify-between"
            >
              <h4 className="w-full text-base-title text-xl flex items-center justify-between gap-2">
                <span className="capitalize">{reformatTitle(repo.name)} </span>
                <small className="text-sm text-base-span">
                  {formatDistanceToNow(repo.updated_at, {
                    addSuffix: true,
                  })}
                </small>
              </h4>
              <p className="text-base-text text-base">{repo.description}</p>
            </Link>
          );
        })}
      </section>
    </>
  );
}
