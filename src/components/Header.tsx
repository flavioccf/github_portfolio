import logo from "../assets/github_blog.svg";

export function Header() {
  return (
    <header className="bg-hero bg-cover h-64 md:h-[20vw] flex items-center justify-center">
      <img
        src={logo}
        alt="GitHub Blog"
        width={150}
        height={100}
        className="mt-[-5vh] w-4/12 md:w-[10vw]"
      />
    </header>
  );
}
