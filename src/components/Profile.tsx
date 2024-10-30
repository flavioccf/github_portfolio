import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContextSelector } from "use-context-selector";
import { GithubProfileContext } from "../contexts/GithubProfileContext";

export function Profile() {
  const githubProfile = useContextSelector(
    GithubProfileContext,
    (context) => context?.githubProfile
  );

  return (
    <>
      <section className="w-90 md:max-w-[864px] m-auto min-h-[216px] bg-base-profile rounded-md shadow-lg mt-[-5vh] flex flex-col md:flex-row gap-10 p-10 relative">
        <img
          src={githubProfile?.avatar_url}
          width={150}
          height={150}
          className="rounded-md w-full md:w-[150px] object-contain object-center"
          alt={githubProfile?.name}
        />
        <div className="py-2 flex-1 flex flex-col gap-2 items-start justify-between">
          <h2 className="text-base-title text-2xl">{githubProfile?.name}</h2>
          <p className="text-base-text text-base">{githubProfile?.bio}</p>
          <div className="flex gap-6">
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faGithub}
              />{" "}
              {githubProfile?.login}
            </span>
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faBuilding}
              />{" "}
              {githubProfile?.company}
            </span>
            <span className="text-base-subtitle text-base flex gap-2 items-center justify-center">
              <FontAwesomeIcon
                className="text-base-label text-lg"
                icon={faUserGroup}
              />{" "}
              {githubProfile?.followers} Followers
            </span>
          </div>
        </div>
        <a
          target="_blank"
          href={githubProfile?.html_url}
          className="uppercase text-base-blue text-xs font-bold absolute top-5 right-5 flex gap-2 items-center justify-center"
          rel="noreferrer"
        >
          GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </section>
    </>
  );
}
