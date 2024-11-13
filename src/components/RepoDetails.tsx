import { Link, useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { GithubProfileContext } from "../contexts/GithubProfileContext";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reformatTitle } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

export function RepoDetails() {
  const { repoId } = useParams();
  const githubRepo = useContextSelector(GithubProfileContext, (context) =>
    context?.githubRepos?.find((repo) => repo.id.toString() === repoId)
  );
  if (!githubRepo) {
    return <>No Repository Found</>;
  }

  console.log(githubRepo);
  return (
    <>
      <section className="w-11/12 md:max-w-[864px] m-auto bg-base-profile rounded-md shadow-lg mt-[-5vh] flex flex-col md:flex-row gap-10 p-10 relative">
        <div className="py-2 flex-1 flex flex-col gap-6 items-start justify-between">
          <div className="flex justify-between flex-1 w-full">
            <Link
              to="/"
              className="uppercase text-base-blue text-xs font-bold top-5 left-5 flex gap-2 items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronLeft} /> Back
            </Link>
            <a
              target="_blank"
              href={githubRepo?.html_url}
              className="uppercase text-base-blue text-xs font-bold top-5 right-5 flex gap-2 items-center justify-center"
              rel="noreferrer"
            >
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <h2 className="text-base-title text-2xl capitalize">
            {reformatTitle(githubRepo?.name)}
          </h2>
          <div className="flex gap-x-6 gap-y-2 flex-wrap">
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faGithub}
              />{" "}
              {githubRepo?.owner.login}
            </span>
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faCalendar}
              />{" "}
              {formatDistanceToNow(githubRepo.updated_at, {
                addSuffix: true,
              })}
            </span>
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faEye}
              />{" "}
              {githubRepo?.watchers_count}
            </span>
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faStar}
              />{" "}
              {githubRepo?.stargazers_count}
            </span>
          </div>
        </div>
      </section>
      <section className="w-11/12 md:max-w-[864px] m-auto p-10 relative">
        <p>{githubRepo.description}</p>
        {githubRepo.homepage && (
          <p>
            Home Page:{" "}
            <a target="_blank" rel="noreferrer" href={githubRepo.homepage}>
              {githubRepo.homepage}
            </a>
          </p>
        )}
        <ul>
          {githubRepo.topics.map((topic) => {
            return <li key={topic.replace(" ", "_")}>{topic}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
